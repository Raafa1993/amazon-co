import { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";
import Input from "../../../components/form/Input";
import ButtonSubmit from "../../../components/form/ButtonSubmit";
import getValidationErrors from "../../../Utils/getValidationErrors";
import * as Yup from "yup";
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify'

import ArteLogin from "../../../assets/images/ArteLogin.png";
import LogoAmazon from "../../../assets/icons/LogoAmazon";
import BgLogin from "../../../assets/images/Bglogin.png";
import IconArrowLeft from "../../../assets/icons/IconArrowLeft";

import {
  Container,
  BgContent,
  HeaderLogo,
  MainArte,
  ContentSignIn,
  Contentinfo,
  WellcomeSignIn,
  ContentForm,
  BackToPage,
} from "./styles";

export default function SignInUp() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true)

      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail obrigatório"),
        telefone: Yup.string().required("Telefone obrigatório"),
        unidade: Yup.string().required("Unidade obrigatório"),
        setor: Yup.string().required("Setor obrigatório"),
        id_endereco: Yup.string().required("Endereco obrigatório"),
        senha: Yup.string().min(4, "No mínimo 4 digitos"),
        confirmeSenha: Yup.string().min(4, "No mínimo 4 digitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { nome, email, telefone, unidade, setor, id_endereco, senha, confirmeSenha }: any = data

      const newData = {
        nome,
        email,
        telefone,
        unidade,
        setor,
        id_endereco: parseInt(id_endereco),
        senha,
        confirmeSenha
      }

      const response = await api.post("/usuario", newData);

      console.log(response.data)


      setLoad(false)
      toast.success('Cadastro realizado com sucesso!')

      setTimeout(() => {
        history.push('/')
      }, 3000)

    } catch(err: any) {
      setLoad(false)

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      toast.error(err.response.data.message)
    }
  }, [history])

  return (
    <Container>
      <BgContent style={{ background: `${BgLogin}` }}>
        <HeaderLogo>
          <LogoAmazon />
        </HeaderLogo>

        <MainArte>
          <img src={ArteLogin} alt="Arte Login" />
        </MainArte>
      </BgContent>

      <ContentSignIn>
        <Contentinfo>
          <WellcomeSignIn>
            <h1>Cadastro de Usuário</h1>
            <span>
              Preencha os dados abaixo para realizar o cadastro é rápido e fácil
            </span>
          </WellcomeSignIn>

          <ContentForm>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <Input
                  type="text"
                  name="nome"
                  label="Nome do Usuário"
                />

                <Input
                  type="text"
                  name="telefone"
                  mask="fone"
                  label="Telefone"
                />

                <Input
                  type="email"
                  name="email"
                  label="E-mail"
                />

                <Input
                  type="text"
                  name="unidade"
                  label="Unidade"
                />

                <Input
                  type="text"
                  name="setor"
                  label="Setor"
                />

                <Input
                  type="text"
                  name="id_endereco"
                  label="ID"
                />

                <Input
                  type="password"
                  name="senha"
                  label="Senha"
                />

                <Input
                  type="password"
                  name="confirmeSenha"
                  label="Confirmar senha"
                />

                <ButtonSubmit 
                  type="submit"
                  loading={load}
                >
                    Continuar
                </ButtonSubmit>
              </div>
            </Form>

            <BackToPage>
              <button type="button" onClick={() => history.goBack()}>
                <IconArrowLeft />
                Voltar
              </button>
            </BackToPage>
          </ContentForm>
        </Contentinfo>
      </ContentSignIn>
    </Container>
  );
}

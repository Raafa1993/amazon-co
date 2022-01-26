import React, { useCallback, useRef, useState } from "react";
import ArteLogin from "../../assets/images/ArteLogin.png";
import LogoAmazon from "../../assets/icons/LogoAmazon";
import BgLogin from "../../assets/images/Bglogin.png";
import Input from "../../components/form/Input";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from "../../Utils/getValidationErrors";
import { toast } from 'react-toastify'
import { api } from "../../services/api";

import IconArrowLeft from "../../assets/icons/IconArrowLeft";
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

interface SignInFormData {
  nome: string;
  email: string;
  telefone: string;
  unidade: string;
  setor: string;
  id_endereco: string;
  senha: string;
  confirmeSenha: string;
}

export default function SignInUp() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const [formData, setFormData] = useState<SignInFormData>({
    nome: "",
    email: "",
    telefone: "",
    unidade: "",
    setor: "",
    id_endereco: "",
    senha: "",
    confirmeSenha: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

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

      await api.post("/usuario", data);
      
      setLoad(false)
      toast.error('Cadastro realizado com sucesso!')

      setTimeout(() => {
        history.push('/home')
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
                  value={formData.nome}
                  type="text"
                  name="nome"
                  label="Nome do Usuário"
                  onChange={handleInputChange}
                  // error={errors}
                />

                <Input
                  value={formData.telefone}
                  type="text"
                  name="telefone"
                  mask="fone"
                  label="Telefone"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.email}
                  type="email"
                  name="email"
                  label="E-mail"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.unidade}
                  type="text"
                  name="unidade"
                  label="Unidade"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.setor}
                  type="text"
                  name="setor"
                  label="Setor"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.id_endereco}
                  type="text"
                  name="id_endereco"
                  label="ID"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.senha}
                  type="password"
                  name="senha"
                  label="Senha"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.confirmeSenha}
                  type="password"
                  name="confirmeSenha"
                  label="Confirmar senha"
                  onChange={handleInputChange}
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

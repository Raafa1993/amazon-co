import React, { useCallback, useRef, useState } from "react";
import ArteLogin from "../../assets/images/ArteLogin.png";
import LogoAmazon from "../../assets/icons/LogoAmazon";
import BgLogin from "../../assets/images/Bglogin.png";
import Input from "../../components/form/Input";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import getVaidationErrors from "../../Utils/getValidationErrors";

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
import api from "../../services/api";

interface SignInFormData {
  nome: string;
  email: string;
  telefone: string;
  unidade: string;
  setor: string;
  id_endereco: string;
  senha: string;
  confirmar_senha: string;
}

interface Errors {
  error: boolean;
  message: string;
  name: string;
}

export default function SignInUp() {
  const formRef = useRef(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState<Errors>();
  const [formData, setFormData] = useState<SignInFormData>({
    nome: "",
    email: "",
    telefone: "",
    unidade: "",
    setor: "",
    id_endereco: "",
    senha: "",
    confirmar_senha: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = useCallback(async (data: object) => {
    try {
      // formRef.current?.setErrors({});
      setLoad(true)

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail obrigatório"),
        password: Yup.string().min(6, "No mínimo 6 digitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // const { 
      //   nome,
      //   email,
      //   telefone,
      //   unidade,
      //   setor,
      //   id_endereco,
      //   senha,
      //   confirmar_senha,
      // } = formData;

      // const data = {
      //   nome,
      //   email,
      //   telefone,
      //   unidade,
      //   setor,
      //   id_endereco,
      //   senha,
      //   confirmar_senha,
      // };

      // console.log(data)

      
      // const response = await api.post("/usuario", data);
      
      // console.log(response)

      // if (response.data.status === "error") {
      //   throw response.data.message;
      // }

      alert('Usuario cadastrado com sucesso')

  
      setLoad(false)
      // history.push('/home')

    } catch(err: any) {
      if (err instanceof Yup.ValidationError) {
        setLoad(false);

        // const errors = getVaidationErrors(err);

        // formRef.current?.setErrors(errors);

        return;
      }
    }
  }, [])

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
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <Input
                  value={formData.nome}
                  type="text"
                  name="nome"
                  label="Nome do Usuário"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.telefone}
                  type="text"
                  name="telefone"
                  mask="fone"
                  label="Telefone"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.email}
                  type="email"
                  name="email"
                  label="E-mail"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.unidade}
                  type="text"
                  name="unidade"
                  label="Unidade"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.setor}
                  type="text"
                  name="setor"
                  label="Setor"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.id_endereco}
                  type="text"
                  name="id_endereco"
                  label="ID"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.senha}
                  type="password"
                  name="senha"
                  label="Senha"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.confirmar_senha}
                  type="password"
                  name="confirmar_senha"
                  label="Confirmar senha"
                  onChange={handleInputChange}
                  error={error}
                />

                <ButtonSubmit 
                  type="submit"
                  loading={load}
                >
                    Continuar
                </ButtonSubmit>
              </div>
            </form>

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

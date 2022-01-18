import React, { useRef, useState } from "react";
import ArteLogin from "../../assets/images/ArteLogin.png";
import LogoAmazon from "../../assets/icons/LogoAmazon";
import BgLogin from "../../assets/images/Bglogin.png";
import Input from "../../components/form/Input";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import InputRadioDefault from "../../components/form/InputRadioDefault";
import { useHistory } from "react-router-dom";

import IconArrowLeft from "../../assets/icons/IconArrowLeft";
import {
  Container,
  BgContent,
  HeaderLogo,
  MainArte,
  ContentSignIn,
  Contentinfo,
  WellcomeSignIn,
  OptionUser,
  RadioOption,
  ContentForm,
  BackToPage,
} from "./styles";

interface SignInFormData {
  name: string;
  phone: string;
  email: string;
  unidade: string;
  setor: string;
  id: string;
  password: string;
  confirmPassword: string;
}

export default function SignInUp() {
  const formRef = useRef(null);
  const history = useHistory();
  const [inputRadio, setInputRadio] = useState<string>("group");
  const [formData, setFormData] = useState<SignInFormData>({
    name: "",
    phone: "",
    email: "",
    unidade: "",
    setor: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

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
          <OptionUser>
            <h2>Tipo de Instituição</h2>
            <RadioOption>
              <InputRadioDefault
                options={[
                  {
                    label: "",
                    value: "usuario",
                  },
                  {
                    label: "",
                    value: "grafica",
                  },
                ]}
                value={inputRadio}
                onChange={value => setInputRadio(value)}
              />
            </RadioOption>
          </OptionUser>

          <ContentForm>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <Input
                  value={formData.name}
                  type="text"
                  name="name"
                  label="Nome do Usuário"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.phone}
                  type="text"
                  name="phone"
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
                  value={formData.id}
                  type="text"
                  name="id"
                  label="ID"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.password}
                  type="text"
                  name="password"
                  label="Senha"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.confirmPassword}
                  type="password"
                  name="confirmPassword"
                  label="Confirmar senha"
                  onChange={handleInputChange}
                />

                <ButtonSubmit type="submit">Continuar</ButtonSubmit>
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

import React, { useRef, useState } from "react";
import Input from "../../components/form/Input";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import { useHistory } from "react-router-dom";

import BgLogin from "../../assets/images/Bglogin.png";
import ArteLogin from "../../assets/images/ArteLogin.png";
import LogoAmazon from "../../assets/icons/LogoAmazon";
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
  password: string;
  confirmPassword: string;
}

export default function ForgottenPassword() {
  const formRef = useRef(null);
  const history = useHistory();
  const [formData, setFormData] = useState<SignInFormData>({
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
      <ContentSignIn>
        <Contentinfo>
          <WellcomeSignIn>
            <h1>Cadastrar nova senha</h1>
            <span>
              Preencha os dados abaixo para recuperar sua senha, é rápido e
              fácil
            </span>
          </WellcomeSignIn>

          <ContentForm>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
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

      <BgContent style={{ background: `${BgLogin}` }}>
        <HeaderLogo>
          <LogoAmazon />
        </HeaderLogo>

        <MainArte>
          <img src={ArteLogin} alt="Arte Login" />
        </MainArte>
      </BgContent>
    </Container>
  );
}

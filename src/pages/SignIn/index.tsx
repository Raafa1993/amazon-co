import React, { useRef, useState } from "react";
import ArteLogin from "../../assets/images/ArteLogin.png";
import LogoAmazon from "../../assets/icons/LogoAmazon";
import BgLogin from "../../assets/images/Bglogin.png";
import Input from "../../components/form/Input";
import IconEye from "../../assets/icons/IconEye";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import InputRadioDefault from "../../components/form/InputRadioDefault";
import { useHistory } from "react-router-dom";

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
  NotRegister,
} from "./styles";
import Radio from "../../components/form/Radio";

interface SignInFormData {
  login: string;
  password: string;
}

export default function SignIn() {
  const formRef = useRef(null);
  const history = useHistory();
  const [inputRadio, setInputRadio] = useState<string>("grafica");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<SignInFormData>({
    login: "",
    password: "",
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
            <h1>Bem vindo!</h1>
            <span>Faça o login para acessar nossa plataforma</span>
          </WellcomeSignIn>
          <OptionUser>
            <h2>Tipo de Instituição</h2>
            <RadioOption>
              <Radio
                options={[
                  {
                    label: "Usúario",
                    value: "usuario",
                  },
                  {
                    label: "Grafíca",
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
                  value={formData.login}
                  type="text"
                  name="login"
                  label="login"
                  onChange={handleInputChange}
                />

                <Input
                  value={formData.password}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  label="password"
                  Icon={IconEye}
                  onChange={handleInputChange}
                  handleOnPassword={() => setPasswordVisible(!passwordVisible)}
                />

                <button className="forgotPassword" type="button">
                  Esquecia a senha
                </button>

                <ButtonSubmit
                  type="submit"
                  onClick={() => history.push("/home")}
                >
                  Entrar
                </ButtonSubmit>
              </div>
            </form>

            <NotRegister isUser={inputRadio === "usuario"}>
              <span>
                Não é cadastrado?
                <button
                  type="button"
                  onClick={() => history.push("/cadastrar")}
                >
                  Clique aqui para se Cadastrar
                </button>
              </span>
            </NotRegister>
          </ContentForm>
        </Contentinfo>
      </ContentSignIn>
    </Container>
  );
}

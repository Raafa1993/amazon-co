import React, { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/form/Input";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import Radio from "../../components/form/Radio";
import { useAuth } from "../../hooks/AuthContext";

import IconEye from "../../assets/icons/IconEyeClose";
import LogoAmazon from "../../assets/icons/LogoAmazon";

import BgLogin from "../../assets/images/Bglogin.png";
import ArteLogin from "../../assets/images/ArteLogin.png";

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

interface SignInFormData {
  email: string;
  senha: string;
}

interface Errors {
  error: boolean;
  message: string;
  name: string;
}

export default function SignIn() {
  const formRef = useRef(null);
  const history = useHistory();
  const { signIn, setTypeInt, typeInt, user } = useAuth()
  
  const [load, setLoad] = useState(false);
  const [error, setError] = useState<Errors>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    senha: "",
  });

  console.log(user)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = useCallback(async (event: any) => {
    try {
      event.preventDefault();
      setLoad(true)

      const { email, senha } = formData;
      const data = {
        email,
        senha,
      };

      await signIn({
        email: data.email,
        senha: data.senha,
      })
      setLoad(false)
      history.push('/home')

    } catch(err: any) {
      console.log(err)
      setTimeout(() => {
        setError({
          error: true,
          message: err.message,
          name: err.name,
        });
        setLoad(false)
      }, 1000);
    }
  }, [signIn, formData])

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
                    value: "/login",
                  },
                  {
                    label: "Grafíca",
                    value: "/login-grafica",
                  },
                ]}
                value={typeInt}
                onChange={value => setTypeInt(value)}
              />
            </RadioOption>
          </OptionUser>

          <ContentForm>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <Input
                  value={formData.email}
                  type="text"
                  name="email"
                  label="login"
                  onChange={handleInputChange}
                  error={error}
                />

                <Input
                  value={formData.senha}
                  type={passwordVisible ? "text" : "password"}
                  name="senha"
                  label="password"
                  Icon={IconEye}
                  onChange={handleInputChange}
                  handleOnPassword={() => setPasswordVisible(!passwordVisible)}
                />

                <button 
                  className="forgotPassword" 
                  type="button"
                  onClick={() => history.push("/recuperar-senha")}
                >
                  Esquecia a senha
                </button>

                <ButtonSubmit
                  type="submit"
                  loading={load}
                >
                  Entrar
                </ButtonSubmit>
              </div>
            </form>

            <NotRegister isUser={typeInt === "/login"}>
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

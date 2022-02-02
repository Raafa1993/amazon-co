import React, { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../../components/form/Input";
import ButtonSubmit from "../../../components/form/ButtonSubmit";
import Radio from "../../../components/form/Radio";
import { useAuth } from "../../../hooks/Auth";
import * as Yup from "yup";
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from "../../../Utils/getValidationErrors";
import { toast } from 'react-toastify'

import IconEye from "../../../assets/icons/IconEyeClose";
import LogoAmazon from "../../../assets/icons/LogoAmazon";

import BgLogin from "../../../assets/images/Bglogin.png";
import ArteLogin from "../../../assets/images/ArteLogin.png";

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

export default function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn, setTypeInt, typeInt } = useAuth()
  
  const [load, setLoad] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    senha: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true)

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido")
          .required("E-mail obrigatório"),
        senha: Yup.string().min(4, "No mínimo 4 digitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        senha: data.senha,
      })

      setLoad(false)

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
  }, [signIn, history])

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
                    label: "Gráfica",
                    value: "/login-grafica",
                  },
                ]}
                value={typeInt}
                onChange={value => setTypeInt(value)}
              />
            </RadioOption>
          </OptionUser>

          <ContentForm>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <Input
                  value={formData.email}
                  type="text"
                  name="email"
                  label="login"
                  onChange={handleInputChange}
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
            </Form>

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

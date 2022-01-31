import { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
import { FormHandles } from "@unform/core";

import api from "../../../services/api";
import Input from "../../../components/form/Input";
import ButtonSubmit from "../../../components/form/ButtonSubmit";
import getValidationErrors from "../../../Utils/getValidationErrors";

import BgLogin from "../../../assets/images/Bglogin.png";
import ArteLogin from "../../../assets/images/ArteLogin.png";
import LogoAmazon from "../../../assets/icons/LogoAmazon";
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

interface MyAccountData {
  email: string;
}

export default function RecoveryPassword() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);

  const handleSubmit = useCallback(async (data: MyAccountData) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true);

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um email valido")
          .required("Email obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      api.get(`/usuario/senha/recuperar/${data.email}`);
      setLoad(false);
      toast.success(
        "E-mail enviado com sucesso!\n\nFavor verifique seu E-mail",
      );

      setTimeout(() => {
        history.push("/");
      }, 3000);

    } catch (err: any) {
      setLoad(false);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      toast.error(err.response.data.message);
    }
  }, []);

  return (
    <Container>
      <ContentSignIn>
        <Contentinfo>
          <WellcomeSignIn>
            <h1>Conta AmazonCopy</h1>
            <span>
            Informe seu e-mail ou login e enviaremos instruções para você criar
            sua senha.
            </span>
          </WellcomeSignIn>

          <ContentForm>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <Input
                  type="email"
                  name="email"
                  label="E-mail"
                  placeholder="Digite aqui"
                />
              </div>

              <ButtonSubmit type="submit" loading={load}>
                Enviar
              </ButtonSubmit>
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

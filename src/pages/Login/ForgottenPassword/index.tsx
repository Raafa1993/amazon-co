import { useCallback, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Input from "../../../components/form/Input";
import ButtonSubmit from "../../../components/form/ButtonSubmit";
import getValidationErrors from "../../../Utils/getValidationErrors";
import api from "../../../services/api";

import * as Yup from 'yup';
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { toast } from "react-toastify";

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

interface SignInFormData {
  senha: string;
  confirmeSenha: string;
}

interface ParamsProps {
  id: string;
}

export default function ForgottenPassword() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const { id } = useParams<ParamsProps>();

  const handleSubmit = useCallback(async(data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true)

      const schema = Yup.object().shape({
        senha: Yup.string().min(4, "No mínimo 4 digitos"),
        confirmeSenha: Yup.string().min(4, "No mínimo 4 digitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { senha, confirmeSenha } = data

      const newData = {
        senha,
        confirmeSenha,
        token: id,
      }

      api.post(`/usuario/senha/alterar`, newData)

      setLoad(false)
      toast.success('Senha atualizada com sucesso!')

      setTimeout(() => {
        history.push("/");
      }, 3000);

    } catch(err: any) {
      setLoad(false)

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      toast.error(err.response.data.message)
    }
  }, [id])

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
            <Form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
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

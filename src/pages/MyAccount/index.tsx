import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/Auth";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { toast } from "react-toastify";
import Input from "../../components/form/Input";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import getValidationErrors from "../../Utils/getValidationErrors";

import IconArrowLeft from "../../assets/icons/IconArrowLeft";

import {
  Container,
  Content,
  ChangePassword,
  BackToHome,
  PanelLeft,
  PanelRight,
} from "./styles";

interface MyAccountData {
  nome: string;
  email: string;
  telefone: string;
  setor: string;
  unidade: string;
  id_endereco: string;
}

interface SignInFormData {
  senha: string;
  confirmeSenha: string;
}

export default function MyAccount() {
  const formRef = useRef<FormHandles>(null);
  const { user, updateUser } = useAuth();
  const history = useHistory();

  const [loadUser, setLoadUser] = useState(false);
  const [load, setLoad] = useState(false);
  const [dataUser, setDataUser] = useState<MyAccountData>();

  const [loadPassword, setLoadPassword] = useState(false);

  useEffect(() => {
    setLoad(true);
    api.get(`${user.profile}/${user.id}`).then(res => {
      setDataUser(res.data.result);
    });
    setLoad(false);
  }, []);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      setLoadUser(true);

      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .email("Digite um email valido")
          .required("Email obrigatório"),
        telefone: Yup.string().required("Telefone obrigatório"),
        unidade: Yup.string().required("Unidade obrigatório"),
        setor: Yup.string().required("Setor obrigatório"),
        id_endereco: Yup.string().required("Endereço obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.put(`usuario/${user.id}`, data);
      updateUser(response.data.result.user)

      setLoad(false);

      toast.success("Cadastro realizado com sucesso!");
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

  const handleOnPassword = useCallback(async (dataPassword: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      setLoadPassword(true);

      const schema = Yup.object().shape({
        senha: Yup.string().min(4, "No mínimo 4 digitos"),
        confirmeSenha: Yup.string().min(4, "No mínimo 4 digitos"),
      });

      await schema.validate(dataPassword, {
        abortEarly: false,
      });

      api.put(`usuario-senha/${parseInt(user.id)}`, dataPassword);
      setLoadPassword(false);

      toast.success("Senha atualizada com sucesso");
    } catch (err: any) {
      setLoadPassword(false);

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
      <Content>
        <PanelLeft>
          <h1>Minha Conta</h1>
          <Form onSubmit={handleSubmit}>
            <h2>Dados da Conta</h2>

            <div className="field">
              <Input
                type="text"
                name="nome"
                defaultValue={dataUser?.nome}
                label="Nome da Unidade"
                placeholder="Digite aqui"
              />

              <Input
                type="email"
                name="email"
                defaultValue={dataUser?.email}
                label="E-mail"
                placeholder="Digite aqui"
              />

              <Input
                type="text"
                name="telefone"
                defaultValue={dataUser?.telefone}
                label="Telefone"
                placeholder="Digite aqui"
              />

              <Input
                type="text"
                name="setor"
                defaultValue={dataUser?.setor}
                label="setor"
                placeholder="Digite aqui"
              />

              <Input
                type="text"
                name="unidade"
                defaultValue={dataUser?.unidade}
                label="Unidade"
                placeholder="Digite aqui"
              />

              <Input
                type="text"
                name="id_endereco"
                defaultValue={dataUser?.id_endereco}
                label="Endereço"
                placeholder="Digite aqui"
              />
            </div>

            <ButtonSubmit type="submit" loading={loadUser}>
              Atualizar dados
            </ButtonSubmit>
          </Form>
        </PanelLeft>

        <PanelRight>
          <h1>Trocar senha</h1>

          <Form ref={formRef} onSubmit={handleOnPassword}>
            <div className="field">
              <Input type="password" name="senha" label="Senha" />

              <Input
                type="password"
                name="confirmeSenha"
                label="Confirmar senha"
              />

              <ButtonSubmit type="submit" loading={loadPassword}>
                Atualizar senha
              </ButtonSubmit>
            </div>
          </Form>
        </PanelRight>
      </Content>

      <BackToHome>
        <button className="backHome" onClick={() => history.goBack()}>
          <IconArrowLeft />
          Voltar
        </button>
      </BackToHome>
    </Container>
  );
}

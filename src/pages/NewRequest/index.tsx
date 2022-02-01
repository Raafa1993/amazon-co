import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import IconArrowLeft from "../../assets/icons/IconArrowLeft";
import Input from "../../components/form/Input";
import InputFile from "../../components/form/InputFile";
import TextArea from "../../components/form/TextArea";

import * as Yup from "yup";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../Utils/getValidationErrors";
import { toast } from "react-toastify";
import api from "../../services/api";
import ButtonSubmit from "../../components/form/ButtonSubmit";
import Select from "../../components/form/Select";

import {
  Container,
  Content,
  PanelLeft,
  PanelRight,
  BackToHome,
} from "./styles";

interface MyAccountData {
  id_endereco: string;
  nome: string;
  telefone: string;
  email: string;
  unidade: string;
  setor: string;
}

interface ServiceProps {
  descricao: string;
  id_servico: string;
  valor_unitario: number;
}

interface InputProps {
  qtd_paginas: string;
  qtd_copias: string;
  id_servico: string;
}

export default function NewRequest() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { user } = useAuth();
  const [dataUser, setDataUser] = useState<MyAccountData>();
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [formData, setFormData] = useState<InputProps>({
    qtd_paginas: "",
    qtd_copias: "",
    id_servico: "",
  });

  const [currency, setCurrency] = useState<any>(0);
  const [serviceSelect, setServiceSelect] = useState({ valor_unitario: 0 });
  const [loadUser, setLoadUser] = useState(true);
  const [load, setLoad] = useState(false);
  const [file, setFile] = useState<any>('');

  useEffect(() => {
    setLoadUser(true);
    api.get(`usuario/${user.id}`).then(res => {
      setDataUser(res.data.result);
    });

    setLoadUser(false);
  }, [user.id]);

  useEffect(() => {
    api.get("servico").then(response => {
      setServices(response.data.result);
    });
  }, []);

  function handleinputChange(event: any) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    const newServiceSelect: any = services.filter(
      row => row.id_servico.toString() === formData.id_servico.toString(),
    ).length
      ? services.filter(
          row => row.id_servico.toString() === formData.id_servico.toString(),
        )[0]
      : {
          valor_unitario: 0,
        };
    const valueTotal =
      parseInt(formData.qtd_paginas) *
      parseInt(formData.qtd_copias) *
      parseInt(newServiceSelect.valor_unitario);
    setCurrency(valueTotal);
    setServiceSelect({ ...newServiceSelect });
  }, [formData]);

  async function handleChangeFile(e:any){
    console.log(e)
    if (e.target.files.length) {
      const data = new FormData();
      data.append("projeto", e.target.files[0]);
      
      let retorno = await api.post('pedido-upload', data);
      setFile(retorno.data.result)
    }
  }


  async function handleSubmit (data: object) {
      try {
        formRef.current?.setErrors({});

        setLoad(true);

        const schema = Yup.object().shape({
          id_grafica: Yup.string().required("Campo obrigatorio"),
          id_servico: Yup.string().required("Campo obrigatorio"),
          nome: Yup.string().required("Campo obrigatorio"),
          qtd_paginas: Yup.string().required("Campo obrigatorio"),
          qtd_copias: Yup.string().required("Campo obrigatorio"),
          unidade: Yup.string().required("Campo obrigatorio"),
          setor: Yup.string().required("Campo obrigatorio"),
          valor: Yup.string().required("Campo obrigatorio"),
          observacao: Yup.string().required("Campo obrigatorio"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          id_grafica,
          id_servico,
          nome,
          qtd_paginas,
          qtd_copias,
          unidade,
          setor,
          valor,
          observacao,
        }: any = data;

        const newData = {
          id_grafica,
          id_servico,
          nome,
          qtd_paginas,
          qtd_copias,
          unidade,
          setor,
          valor,
          observacao,
          arquivo: file
        };

        await api.post("/pedido", newData);

        setLoad(false);
        toast.success("Pedido cadastrado com sucesso!");

      } catch (err: any) {
        setLoad(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        toast.error(err.response.data.message);
      }
    }

  return (
    <Container>
      <Content>
        <PanelLeft>
          <h1>Novo Pedido</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Dados do pedido</h2>

            <div className="field">
              <Input
                type="text"
                name="id_grafica"
                disabled
                label="Nome do Usuario"
                placeholder="Digite aqui"
                value={2}
              />

              <Input
                type="text"
                name="unidade"
                disabled
                label="Nome da Unidade"
                placeholder="Digite aqui"
                defaultValue={dataUser?.unidade}
              />

              <Input
                type="text"
                name="setor"
                disabled
                label="Setor"
                placeholder="Digite aqui"
                defaultValue={dataUser?.setor}
              />

              <Input
                type="text"
                name="nome"
                // disabled={idPedido ? true : false}
                label="Nome do pedido"
                placeholder="Digite aqui"
              />

              <Input
                type="text"
                name="qtd_paginas"
                // disabled={idPedido ? true : false}
                label="Quantidade de paginas"
                placeholder="Digite aqui"
                onChange={handleinputChange}
              />

              <Input
                type="text"
                name="qtd_copias"
                // disabled={idPedido ? true : false}
                label="Qunatidade de copias"
                placeholder="Digite aqui"
                onChange={handleinputChange}
              />

              <Select
                label="Servicço"
                name="id_servico"
                // disabled={idPedido ? true : false}
                placeholder="Selecione uma opção"
                onChange={handleinputChange}
              >
                <option value="default">Selecione uma opção</option>
                {services.map(row => (
                  <option key={row.id_servico} value={row.id_servico}>
                    {row.descricao}
                  </option>
                ))}
              </Select>

              <Input
                type="text"
                name="valorUnit"
                // disabled={idPedido ? true : false}
                label="Valor Unitario"
                placeholder="R$:"
                value={serviceSelect.valor_unitario}
                onChange={handleinputChange}
              />

              <Input
                type="text"
                name="valor"
                disabled
                label="Valor Total"
                placeholder="R$:"
                value={currency ? currency : ""}
              />

              <TextArea
                defaultValue=""
                name="observacao"
                // disabled={idPedido ? true : false}
                label="Observação"
                placeholder="Digite aqui"
              />
            </div>

            <ButtonSubmit type="submit" loading={load}>
              Continuar
            </ButtonSubmit>
          </Form>
        </PanelLeft>

        <PanelRight>
          <h2>Download do Arquivo</h2>

          <InputFile
            name="totalValue"
            label="Clique no arquivo para realizar o Download"
            type="file"
            // disabled={!idPedido ? true : false}
            id="caminho"
            onChange={handleChangeFile}
          />

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

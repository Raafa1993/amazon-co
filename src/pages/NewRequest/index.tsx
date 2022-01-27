import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import Input from '../../components/form/Input';
import InputFile from '../../components/form/InputFile';
import TextArea from '../../components/form/TextArea';

import * as Yup from "yup";
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from "../../Utils/getValidationErrors";
import { toast } from 'react-toastify'
import api from "../../services/api";

import { 
  Container,
  Content,
  PanelLeft,
  PanelRight,
  BackToHome,
} from './styles';
import ButtonSubmit from '../../components/form/ButtonSubmit';
import SelectDefault from '../../components/form/SelectDefault';
import Select from '../../components/form/Select';

interface MyAccountData {
  id_endereco: string,
  nome: string;
  telefone: string;
  email: string;
  unidade: string;
  setor: string
}

interface ServiceProps {
  descricao: string;
  id_servico: number;
  valor_unitario: number;
}

interface RequestProps {
  id_grafica: number;
  id_servico: number;
  nome: string;
  qtd_paginas: string;
  qtd_copias: string;
  unidade: string;
  setor: string;
  observacao: string; 
  valor: string;
}

export default function NewRequest() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { user } = useAuth();
  const [dataUser, setDataUser] = useState<MyAccountData>()
  const [services, setServices] = useState<ServiceProps[]>([])
  const[data, setData] = useState<RequestProps>()

  const [value, setValue] = useState<any>();

  const [loadUser, setLoadUser] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoadUser(true)
    api.get(`usuario/${user.id}`).then((res) => {
      setDataUser(res.data.result)
    })

    setLoadUser(false)
  }, [user.id])

  useEffect(() => {
    api.get('servico').then((response) => {
      setServices(response.data.result)
    })
  }, [])

  function handleOnValue(event: ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value)
  }

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true)

      const schema = Yup.object().shape({
        id_servico: Yup.string().required("Campo obrigatorio"),
        nome: Yup.string().required("Campo obrigatorio"),
        qtd_paginas: Yup.string().required("Campo obrigatorio"),
        qtd_copias: Yup.string().required("Campo obrigatorio"),
        valor: Yup.string().required("Campo obrigatorio"),
        observacao: Yup.string().required("Campo obrigatorio"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data)

      // await api.post("/usuario", data);

      setLoad(false)
      toast.success('Cadastro realizado com sucesso!')

    } catch(err: any) {
      setLoad(false)

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      toast.error(err.response.data.message)
    }
  }, [history])

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
                name="nomeUser"
                disabled
                label="Nome do Usuario"
                placeholder='Digite aqui'
                defaultValue={dataUser?.nome}
              />

              <Input
                type="text"
                name="unidadeUser"
                disabled
                label="Nome da Unidade"
                placeholder='Digite aqui'
                defaultValue={dataUser?.unidade}
              />

              <Input
                type="text"
                name="setorUser"
                disabled
                label="Setor"
                placeholder='Digite aqui'
                defaultValue={dataUser?.setor}
              />

              <Input
                type="text"
                name="nome"
                label="Nome do pedido"
                placeholder='Digite aqui'
              />

              <Input
                type="text"
                name="qtd_paginas"
                label="Quantidade de paginas"
                placeholder='Digite aqui'
              />

              <Input
                type="text"
                name="qtd_copias"
                label="Qunatidade de copias"
                placeholder='Digite aqui'
              />

              <Select
                label='label'
                name='id_servico'
                placeholder="Status"
                onChange={handleOnValue}
              >
                <option value={0}>Selecione uma opção</option>
                {services.map((row) => (
                  <option key={row.id_servico} value={row.valor_unitario}>{row.descricao}</option>
                ))}
              </Select>

              <Input
                type="text"
                name="valor"
                label="Valor Unitario"
                placeholder='Digite aqui'
                value={`R$: ${value}`}
              />

              <Input
                type="text"
                name="totalValue"
                disabled
                label="Valor Total"
                placeholder='Digite aqui'
                // defaultValue={value}
              />

              <TextArea 
                defaultValue={''}
                name="observacao"
                label="Observação"
                placeholder='Digite aqui'
              />
            </div>
            
            {/* <ButtonDefault 
              type='submit'
              status='concluido'
              text='Salvar'
            /> */}

            <ButtonSubmit 
              type="submit"
              loading={load}
            >
                Continuar
            </ButtonSubmit>
          </Form>
        </PanelLeft>

        <PanelRight>
          <h2>Download do Arquivo</h2>

          <InputFile 
            value={''}
            name="totalValue"
            label="Clique no arquivo para realizar o Download"
 
          />
          
        </PanelRight>

      </Content>

      <BackToHome>
        <button 
          className='backHome'
          onClick={() => history.goBack()}  
        >
          <IconArrowLeft />
          Voltar
        </button>
        
      </BackToHome>
    </Container>
  );
}

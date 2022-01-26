
import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import ButtonDefault from '../../components/form/ButtonDefault';
import Input from '../../components/form/Input';
import InputFile from '../../components/form/InputFile';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';

import * as Yup from "yup";
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from "../../Utils/getValidationErrors";
import { toast } from 'react-toastify'
import { api } from "../../services/api";

import { 
  Container,
  Content,
  PanelLeft,
  PanelRight,
  BackToHome,
} from './styles';

interface MyAccountData {
  id_grafica: string;
  id_servico: string;
  nome: string;
  qtd_pagina: string;
  qtd_copia: string;
  unidade: string;
  setor: string;
  observacao: string;
}

export default function NewRequest() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory()
  const [load, setLoad] = useState(true);
  

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      setLoad(true)

      const schema = Yup.object().shape({
        id_grafica: Yup.string().required("Campo obrigatorio"),
        id_servico: Yup.string().required("Campo obrigatorio"),
        nome: Yup.string().required("Campo obrigatorio"),
        qtd_pagina: Yup.string().required("Campo obrigatorio"),
        qtd_copia: Yup.string().required("Campo obrigatorio"),
        unidade: Yup.string().required("Campo obrigatorio"),
        setor: Yup.string().required("Campo obrigatorio"),
        observacao: Yup.string().required("Campo obrigatorio"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post("/usuario", data);

      console.log(data)
      
      setLoad(false)
      toast.error('Cadastro realizado com sucesso!')

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

              <Select
                label='Select'
                name='Select'
                id='Select'
                isDisabled={true}
                value={''}
              >
                <option value="Conteudo">Conteúdo</option>
                <option value="Pendente">Pendente</option>
                <option value="Impedimento">Impedimento</option>
                <option value="Todos">Todos</option>
              </Select>

              <Input
                value={''}
                type="text"
                name="nameUser"
                disabled
                label="Nome do Usuario"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="unitName"
                disabled
                label="Nome da Unidade"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="sectorName"
                disabled
                label="Setor"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="ordername"
                label="Nome do pedido"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="qtdPages"
                label="Quantidade de paginas"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="qtdCopy"
                label="Qunatidade de copias"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="typeService"
                label="Tipo do Serviço"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="unitValue"
                label="Valor Unitario"
                placeholder='Digite aqui'
              />

              <Input
                value={''}
                type="text"
                name="totalValue"
                disabled
                label="Valor Total"
                placeholder='Digite aqui'
              />

              <TextArea 
                defaultValue={''}
                name="note"
                label="Observação"
                placeholder='Digite aqui'
              />
            </div>
            
            <ButtonDefault 
              type='submit'
              status='concluido'
              text='Salvar'
            />
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

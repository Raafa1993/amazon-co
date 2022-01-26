
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import ButtonDefault from '../../components/form/ButtonDefault';
import Input from '../../components/form/Input';
import InputFile from '../../components/form/InputFile';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { 
  Container,
  Content,
  PanelLeft,
  PanelRight,
  BackToHome,
} from './styles';
import { api } from '../../services/api';
import TextArea from '../../components/form/TextArea';

interface OrderProps {
  id_usuario: string;
  unidade: string;
  setor: string;
  id_pedido: string;
  qtd_paginas: string;
  qtd_copias: string;
  valor: string;
  criado: string;
  status: string;
  id_servico: string;
  observacao: string;
}

export default function AppostileRequest(props: any) {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory()

  const [data, setData] = useState<OrderProps>({
    id_usuario: '',
    unidade: '',
    setor: '',
    id_pedido: '',
    qtd_paginas: '',
    qtd_copias: '',
    valor: '',
    criado: '',
    status: '',
    id_servico: '',
    observacao: '',
  })

  useEffect(() => {
    api.get(`pedido-grafica/${props.match.params.slug}`).then(res => {
      setData(res.data.result[0])
    })
  }, [props.match.params.slug])
  
  return (
    <Container>
      <Content>
        <PanelLeft>
          <h1>{`Pedido Apostilha ${props.match.params.slug}`}</h1>
          <Form ref={formRef} onSubmit={{} as any}>
            <h2>Dados do pedido</h2>

            <div className="field">

              <Input
                value={data.status}
                defaultValue={data.status}
                type="text"
                name="status"
                disabled
                label="status"
                placeholder='Digite aqui'
              />

              <Input
                value={data.id_usuario}
                defaultValue={data.id_usuario}
                type="text"
                name="id_usuario"
                disabled
                label="Nome do Usuario"
                placeholder='Digite aqui'
              />

              <Input
                value={data.unidade}
                defaultValue={data.unidade}
                type="text"
                name="unidade"
                disabled
                label="Nome da Unidade"
                placeholder='Digite aqui'
              />

              <Input
                value={data.id_pedido}
                defaultValue={data.id_pedido}
                type="text"
                name="ordername"
                disabled
                label="Nome do Pedido"
                placeholder='Digite aqui'
              />

              <Input
                value={data.qtd_paginas}
                defaultValue={data.qtd_paginas}
                type="text"
                name="id_pedido"
                disabled
                label="Quantidade de paginas"
                placeholder='Digite aqui'
              />

              <Input
                value={data.qtd_copias}
                defaultValue={data.qtd_copias}
                type="text"
                name="qtd_copias"
                disabled
                label="Qunatidade de copias"
                placeholder='Digite aqui'
              />

              <Input
                value={data.id_servico}
                defaultValue={data.id_servico}
                type="text"
                name="id_servico"
                disabled
                label="Tipo do Serviço"
                placeholder='Digite aqui'
              />

              {/* <Input
                value={data.unitValue}
                type="text"
                name="unitValue"
                disabled
                label="Valor Unitario"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              /> */}

              <Input
                value={data.valor}
                defaultValue={data.valor}
                type="text"
                name="valor"
                mask='currency'
                disabled
                label="Valor Total"
                placeholder='Digite aqui'
              />

              <TextArea 
                defaultValue={data.valor}
                name="observacao"
                disabled
                label="Observação"
                placeholder='Digite aqui'
              />
            </div>
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
        <ButtonDefault 
          status='Concluido'
          text='Salvar'
        />
      </BackToHome>
    </Container>
  );
}

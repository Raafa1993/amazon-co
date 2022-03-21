import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import Input from '../../components/form/Input';
import TextArea from '../../components/form/TextArea';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/Auth';

import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import ButtonDefault from '../../components/form/ButtonDefault';

import { 
  Container,
  Content,
  PanelLeft,
  PanelRight,
  BackToHome,
} from './styles';
import LinkDownload from '../../components/form/LinkDownload';

interface OrderProps {
  nome?: string;
  nome_usuario?: string;
  unidade: string;
  setor: string;
  qtd_paginas: string;
  qtd_copias: string;
  valor: string;
  status: string;
  id_servico: string;
  observacao?: string;
  motivo_cancelamento?: string;
}

interface ParamsProps {
  id: string;
}

export default function AppostileRequest({props}: any) {
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();
  const { id } = useParams<ParamsProps>()
  const history = useHistory();
  const [load, setLoad] = useState(true);
  const [file, setFile] = useState('');
  
  const [data, setData] = useState<OrderProps>({
    unidade: '',
    setor: '',
    qtd_paginas: '',
    qtd_copias: '',
    valor: '',
    status: '',
    id_servico: '',
    observacao: '',
  })

  useEffect(() => {
    setLoad(true);
    api.get(`pedido-${user.profile}/${id}`).then(res => {
      setData(res.data.result[0])
    })
    api.get(`pedido-arquivo-listar/${id}`).then((res) => {
      setFile(res.data.result.caminho)
    })
    setLoad(false)
  }, [user, id])

  console.log(data)

  return (
    <Container>
      <Content>
        <PanelLeft>
          <h1>{`Pedido ${data.nome}`}</h1>
          <Form ref={formRef} onSubmit={{} as any}>
            <h2>Dados do pedido</h2>

            <div className="field">

              <Input
                defaultValue={data.status}
                type="text"
                name="status"
                disabled
                label="status"
                placeholder='Digite aqui'
              />

              <Input
                defaultValue={data.nome_usuario}
                type="text"
                name="nome_usuario"
                disabled
                label="Nome do Usuario"
                placeholder='Digite aqui'
              />

              <Input
                defaultValue={data.unidade}
                type="text"
                name="unidade"
                disabled
                label="Nome da Unidade"
                placeholder='Digite aqui'
              />

              <Input
                defaultValue={data.nome}
                type="text"
                name="nome"
                disabled
                label="Nome do Pedido"
                placeholder='Digite aqui'
              />

              <Input
                defaultValue={data.qtd_paginas}
                type="text"
                name="id_pedido"
                disabled
                label="Quantidade de paginas"
                placeholder='Digite aqui'
              />

              <Input
                defaultValue={data.qtd_copias}
                type="text"
                name="qtd_copias"
                disabled
                label="Qunatidade de copias"
                placeholder='Digite aqui'
              />

              <Input
                defaultValue={data.id_servico}
                type="text"
                name="id_servico"
                disabled
                label="Tipo do Serviço"
                placeholder='Digite aqui'
              />

              <Input
                defaultValue={data.valor}
                type="text"
                name="valor"
                mask='currency'
                disabled
                label="Valor Total"
                placeholder='Digite aqui'
              />

              <TextArea 
                defaultValue={data.observacao}
                name="observacao"
                disabled
                label="Observação"
                placeholder='Digite aqui'
              />

              {data.motivo_cancelamento && (
                <div className='requestCancel'>
                  <TextArea 
                    value={data.motivo_cancelamento}
                    name="observacao"
                    disabled
                    label="Motivo cancelamento"
                    placeholder='Digite aqui'
                  />
                </div>
              )}
            </div>
          </Form>
        </PanelLeft>

        <PanelRight>
          <h2>Download do Arquivo</h2>

          <LinkDownload
            href={file}
            target="_blank"
            label='Clique aqui para realizar o Download'
          >
            Download
          </LinkDownload>

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

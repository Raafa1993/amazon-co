
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import IconEye from '../../assets/icons/IconEye';
import ButtonDefault from '../../components/form/ButtonDefault';
import Input from '../../components/form/Input';
import InputFile from '../../components/form/InputFile';
import InputTextarea from '../../components/form/InputTextarea';
import Select from '../../components/form/Select';
import SelectDefault from '../../components/form/SelectDefault';
import TextArea from '../../components/form/TextArea';

import { 
  Container,
  Form,
  Content,
  PanelLeft,
  PanelRight,
  BackToHome,
} from './styles';

interface MyAccountData {
  nameUser: string;
  sectorName: string;
  unitName: string;
  ordername: string;
  qtdPages: string;
  qtdCopy: string;
  typeService: string;
  unitValue: string;
  totalValue: string;
  note: string;
}

export default function NewRequest() {
  const history = useHistory()
  const [formData, setFormData] = useState<MyAccountData>({
    nameUser: '',
    unitName: '',
    sectorName: '',
    ordername: '',
    qtdPages: '',
    qtdCopy: '',
    typeService: '',
    unitValue: '',
    totalValue: '',
    note: '',
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleTextAre(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  return (
    <Container>
      <Content>
        <PanelLeft>
          <h1>Novo Pedido</h1>
          <Form action="">
            <h2>Dados do pedido</h2>

            <div className="field">

              <Select
                label='Select'
                name='Select'
                id='Select'
                isDisabled={true}
                value={formData.nameUser}
              >
                <option value="Conteudo">Conteúdo</option>
                <option value="Pendente">Pendente</option>
                <option value="Impedimento">Impedimento</option>
                <option value="Todos">Todos</option>
              </Select>

              <Input
                value={formData.nameUser}
                type="text"
                name="nameUser"
                disabled
                label="Nome do Usuario"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.unitName}
                type="text"
                name="unitName"
                disabled
                label="Nome da Unidade"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.sectorName}
                type="text"
                name="sectorName"
                disabled
                label="Setor"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.ordername}
                type="text"
                name="ordername"
                label="Nome do pedido"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.qtdPages}
                type="text"
                name="qtdPages"
                label="Quantidade de paginas"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.qtdCopy}
                type="text"
                name="qtdCopy"
                label="Qunatidade de copias"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.typeService}
                type="text"
                name="typeService"
                label="Tipo do Serviço"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.unitValue}
                type="text"
                name="unitValue"
                label="Valor Unitario"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.totalValue}
                type="text"
                name="totalValue"
                disabled
                label="Valor Total"
                placeholder='Digite aqui'
                onChange={handleInputChange}
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
            // placeholder='Digite aqui'
            // onChange={handleInputChange}
          />

          <TextArea 
            value={formData.note}
            name="note"
            label="Observação"
            placeholder='Digite aqui'
            onChange={handleTextAre}
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

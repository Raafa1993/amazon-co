
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import IconEye from '../../assets/icons/IconEyeClose';
import ButtonDefault from '../../components/form/ButtonDefault';
import Input from '../../components/form/Input';
import InputFile from '../../components/form/InputFile';

import { 
  Container,
  Form,
  Content,
  PanelLeft,
  PanelRight,
  BackToHome,
} from './styles';

interface MyAccountData {
  status: string;
  nameUser: string;
  unitName: string;
  ordername: string;
  qtdPages: string;
  qtdCopy: string;
  typeService: string;
  unitValue: string;
  totalValue: string;
}

export default function AppostileRequest(props: any) {
  const history = useHistory()
  const [formData, setFormData] = useState<MyAccountData>({
    status: 'uma bom nome',
    nameUser: '',
    unitName: '',
    ordername: '',
    qtdPages: '',
    qtdCopy: '',
    typeService: '',
    unitValue: '',
    totalValue: '',
  })

  console.log(props)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({... formData, [name]: value});
  }
  return (
    <Container>
      <Content>
        <PanelLeft>
          <h1>{`Pedido Apostilha ${props.match.params.slug}`}</h1>
          <Form action="">
            <h2>Dados do pedido</h2>

            <div className="field">
              <Input
                value={''}
                type="text"
                name="status"
                label="Status"
                disabled
                defaultValue={'bom nome'}
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

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
                value={formData.ordername}
                type="text"
                name="ordername"
                disabled
                label="Nome do Pedido"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.qtdPages}
                type="text"
                name="qtdPages"
                disabled
                label="Quantidade de paginas"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.qtdCopy}
                type="text"
                name="qtdCopy"
                disabled
                label="Qunatidade de copias"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.typeService}
                type="text"
                name="typeService"
                disabled
                label="Tipo do Serviço"
                placeholder='Digite aqui'
                onChange={handleInputChange}
              />

              <Input
                value={formData.unitValue}
                type="text"
                name="unitValue"
                disabled
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

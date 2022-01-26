
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import ButtonDefault from '../../components/form/ButtonDefault';
import Input from '../../components/form/Input';
import { Form } from '@unform/web';

import { 
  Container,
  Content,
  ChangePassword,
  BackToHome,
} from './styles';

interface MyAccountData {
  name: string;
  email: string;
  phone: string;
  responsible: string;
}

export default function MyAccount() {
  const history = useHistory()
  const [formData, setFormData] = useState<MyAccountData>({
    name: '',
    email: '',
    phone: '',
    responsible: '',
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }
  return (
    <Container>
      <Content>
        <h1>Minha Conta</h1>
        <Form onSubmit={{} as any}>
          <h2>Dados da Conta</h2>

          <div className="field">
            <Input
              value={formData.name}
              type="text"
              name="name"
              label="Nome da Unidade"
              placeholder='Digite aqui'
              onChange={handleInputChange}
            />

            <Input
              value={formData.name}
              type="email"
              name="email"
              label="E-mail"
              placeholder='Digite aqui'
              onChange={handleInputChange}
            />

            <Input
              value={formData.name}
              type="text"
              name="phone"
              label="Telefone"
              placeholder='Digite aqui'
              onChange={handleInputChange}
            />

            <Input
              value={formData.name}
              type="text"
              name="responsible"
              label="Responsável"
              placeholder='Digite aqui'
              onChange={handleInputChange}
            />
          </div>
        </Form>

        <ChangePassword>
          <h3>Trocar Senha</h3>
          <span>Deseja trocar a senha? <button className='passwordChange'>Clique aqui</button></span>
        </ChangePassword>

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

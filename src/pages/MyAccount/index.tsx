import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconArrowLeft from '../../assets/icons/IconArrowLeft';
import ButtonDefault from '../../components/form/ButtonDefault';
import Input from '../../components/form/Input';
import { Form } from '@unform/web';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';

import { 
  Container,
  Content,
  ChangePassword,
  BackToHome,
} from './styles';

interface MyAccountData {
  nome: string;
  email: string;
  telefone: string;
  setor: string;
  unidade: string;
}

export default function MyAccount() {
  const { user } = useAuth()
  const history = useHistory()
  const [load, setLoad] = useState(true)
  const [data, setData] = useState<MyAccountData>()

  useEffect(() => {
    setLoad(true)
    api.get(`${user.profile}/${user.id}`).then((res) => {
      setData(res.data.result)
    })
    setLoad(false)
  }, [])

  return (
    <Container>
      <Content>
        <h1>Minha Conta</h1>
        <Form onSubmit={{} as any}>
          <h2>Dados da Conta</h2>

          <div className="field">
            <Input
              type="text"
              name="nome"
              defaultValue={data?.nome}
              disabled
              label="Nome da Unidade"
              placeholder='Digite aqui'
            />

            <Input
              type="email"
              name="email"
              defaultValue={data?.email}
              disabled
              label="E-mail"
              placeholder='Digite aqui'
            />

            <Input
              type="text"
              name="telefone"
              defaultValue={data?.telefone}
              disabled
              label="Telefone"
              placeholder='Digite aqui'
            />

            <Input
              type="text"
              name="setor"
              defaultValue={data?.setor}
              disabled
              label="setor"
              placeholder='Digite aqui'
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

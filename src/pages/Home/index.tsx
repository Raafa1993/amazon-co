import { useState } from "react";
import IconBallonMessage from "../../assets/icons/IconBallonMessage";
import IconCancel from "../../assets/icons/IconCancel";
import ButtonDefault from "../../components/form/ButtonDefault";
import ButtonNotification from "../../components/form/ButtonNotification";
import InputDefault from "../../components/form/InputDefault";
import InputTextarea from "../../components/form/InputTextarea";
import Modal from "../../components/form/Modal";
import ModalDefault from "../../components/form/ModalDefault";
import SelectDefault from "../../components/form/SelectDefault";
import {
  Container,
  SectionFilter,
  Filter,
  Separator,
  ContentSearch,
  SectionTable,
  TitleModal,
} from "./styles";

export default function Home() {
  const [modal, setModal] = useState(false)

  return (
    <Container>
      <SectionFilter>
        <h1>Pedidos</h1>

        <Filter>
          <SelectDefault
            value=""
            placeholder="Conteúdo"
            onChangeText={value => console.log(value)}
          >
            <option value="Placeholder maneiro">Conteúdo</option>
            <option value="Pendente">Pendente</option>
            <option value="Impedimento">Impedimento</option>
            <option value="Todos">Todos</option>
          </SelectDefault>
          <SelectDefault
            value=""
            placeholder="Mais recente"
            onChangeText={value => console.log(value)}
          >
            <option value="Mais recente">Conteúdo</option>
            <option value="Pendente">Pendente</option>
            <option value="Impedimento">Impedimento</option>
            <option value="Todos">Todos</option>
          </SelectDefault>
          <SelectDefault
            value=""
            placeholder="Filtrar por Quantidade"
            onChangeText={value => console.log(value)}
          >
            <option value="Filtrar por Quantidade">Conteúdo</option>
            <option value="Pendente">Pendente</option>
            <option value="Impedimento">Impedimento</option>
            <option value="Todos">Todos</option>
          </SelectDefault>
        </Filter>

        <Separator />

        <ContentSearch>
          <InputDefault
            onChangeText={value => console.log(value)}
            value={""}
            search={true}
            placeholder={"Busca com icone"}
          />
        </ContentSearch>
      </SectionFilter>

      <SectionTable>
        <table>
          
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Unidade</th>
              <th>Setor</th>
              <th>Pedido</th>
              <th>Qtd. Pagínas</th>
              <th>Qtd. Cópias</th>
              <th>Valor Total</th>
              <th>Data do pedido</th>
              <th>Status</th>
              <th>Impedimento</th>
              <th>Cancelar</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, key) => (
              <tr 
                key={key}
                onClick={() => console.log(key)}  
              >
                <td>Cristiano Ronaldo</td>
                <td>Codigo Santa Helena</td>
                <td>Setor A</td>
                <td>Apostila 01</td>
                <td>250</td>
                <td>X5</td>
                <td>R$150,00</td>
                <td>01/01/2020</td>
                <td>
                  <ButtonDefault
                    status="Pendente"
                    border={true}
                    text='Pendente'
                  />
                </td>
                <td className="buttonIcons">
                  <ButtonNotification 
                    icon={<IconBallonMessage />}
                    onClick={() => setModal(!modal)}  
                  />
                </td>
                <td className="buttonIcons">
                  <ButtonNotification
                   icon={<IconCancel />}
                   onClick={() => console.log('modal2')}  
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionTable>

      {/* <ModalDefault
        id="overlayModal"
        onClose={() => setModal(!modal)}
        openModal={modal}
      >

      </ModalDefault> */}

      <Modal 
        id="overlayModal"
        onClose={() => setModal(!modal)}
        openModal={modal}
        title={'Tem certezxa que deseja Cancelar esse pedido?'}
        subtitle={'Para cancelar é necessario colocar um procedimento avisando o motivo do cancelamento'}
        textArea={true}
        buttonSend={'Enviar'}
        buttonCancel={'Cancelar'}
      />

    </Container>
  );
}

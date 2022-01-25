import { useState } from "react";
import { useHistory } from "react-router-dom";
import IconBallonMessage from "../../assets/icons/IconBallonMessage";
import IconCancel from "../../assets/icons/IconCancel";
import IconEyer from "../../assets/icons/IconEyer";
import ButtonDefault from "../../components/form/ButtonDefault";
import ButtonNotification from "../../components/form/ButtonNotification";
import InputDefault from "../../components/form/InputDefault";
import Modal from "../../components/form/Modal";
import Pagination from "../../components/form/Pagination";
import SelectDefault from "../../components/form/SelectDefault";
import {
  Container,
  SectionFilter,
  Filter,
  Separator,
  ContentSearch,
  SectionTable,
  SectionPagination,
  PaginationButton,
  PaginationItem,
  ButtonPagination,
} from "./styles";

const limit = 9;

export default function Home() {
  const history = useHistory();
  const [modal, setModal] = useState(false);

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([0,1,2,3,4]);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <SectionFilter>
        <h1 className="TitleHome">Pedidos</h1>
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
              <th>Visualizar</th>
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
              <tr key={key}>
                <td>
                  <ButtonDefault
                    status="Visualizar"
                    border={true}
                    text="Visualizar"
                    // icon={<IconEyer />}
                    onClick={() => history.push(`/pedido/${key}`)}
                  />
                </td>
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
                    text="Pendente"
                  />
                </td>
                <td className="buttonIcons">
                  <ButtonNotification
                    icon={<IconBallonMessage />}
                    onClick={() => setModal(!modal)}
                  />
                </td>
                <td>
                  <ButtonNotification
                    icon={<IconCancel />}
                    onClick={() => setModal(!modal)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionTable>

      <SectionPagination>
          <PaginationButton>
            <ButtonPagination
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage < 1}
              isActive={currentPage < 1}
            >
              Voltar
            </ButtonPagination>
            {pages.map(page => (
              <PaginationItem
                isSelect={page === currentPage}
                key={page}
                onClick={() => setCurrentPage(page)}
                disabled={page === currentPage}
              >
                {page + 1}
              </PaginationItem>
            ))}
            <ButtonPagination
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
              isActive={currentPage === pages.length - 1}
            >
              Avançar
            </ButtonPagination>
          </PaginationButton>
      </SectionPagination>

      <Modal
        id="overlayModal"
        onClose={() => setModal(!modal)}
        openModal={modal}
        title={"Tem certezxa que deseja Cancelar esse pedido?"}
        subtitle={
          "Para cancelar é necessario colocar um procedimento avisando o motivo do cancelamento"
        }
        textArea={true}
        buttonSend={"Enviar"}
        buttonCancel={"Cancelar"}
        message={{
          titleMessage: "Pedido cancelado com sucesso!",
          subtitleMessage: "Uma boa descrição",
        }}
      />
    </Container>
  );
}

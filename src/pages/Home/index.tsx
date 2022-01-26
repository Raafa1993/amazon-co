import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import IconBallonMessage from "../../assets/icons/IconBallonMessage";
import IconCancel from "../../assets/icons/IconCancel";
import ButtonDefault from "../../components/form/ButtonDefault";
import ButtonNotification from "../../components/form/ButtonNotification";
import InputDefault from "../../components/form/InputDefault";
import Modal from "../../components/form/Modal";
import SelectDefault from "../../components/form/SelectDefault";
import { api } from "../../services/api";

import {
  Container,
  SectionFilter,
  Filter,
  Separator,
  ContentSearch,
  Main,
  SectionTable,
  SectionPagination,
  PaginationButton,
  PaginationItem,
  ButtonPagination,
} from "./styles";

interface OrderProps {
  id_usuario: string;
  unidade: string;
  setor: string;
  id_pedido: string;
  qtd_paginas: number;
  qtd_copias: number;
  valor: number;
  criado: string;
  status: string;
}

const limit = 9;

export default function Home() {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<OrderProps[]>([]);
  const [status, setStatus] = useState("pendente");

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([0, 1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setLoad(true);
    api
      .get(`pedido-grafica?status=${status}&ordem=criado&pagina=1`)
      .then(res => {
        setData(res.data.result.data);
        setLoad(false);
      });
  }, [status]);

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
            <option value="mais recente">Conteúdo</option>
            <option value="pendente">Pendente</option>
            <option value="impedimento">Impedimento</option>
            <option value="todos">Todos</option>
          </SelectDefault>
          <SelectDefault
            value={status}
            placeholder="Filtrar por Quantidade"
            onChangeText={value => setStatus(value)}
          >
            <option value="pendente">Pendente</option>
            <option value="impedimento">Impedimento</option>
            <option value="todos">Todos</option>
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

      <Main>
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
              {data.map((row, key) => (
                <tr key={row.id_pedido}>
                  <td>
                    <ButtonDefault
                      status="visualizar"
                      border={true}
                      text="Visualizar"
                      onClick={() => history.push(`/pedido/${row.id_pedido}`)}
                    />
                  </td>
                  <td>{row.id_usuario}</td>
                  <td>{row.unidade}</td>
                  <td>{row.setor}</td>
                  <td>{row.id_pedido}</td>
                  <td>{row.qtd_paginas}</td>
                  <td>{row.qtd_copias}</td>
                  <td>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(row.valor)}
                  </td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(row.criado),
                    )}
                  </td>
                  <td>
                    <ButtonDefault
                      status={row.status}
                      border={true}
                      text={row.status}
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
      </Main>

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

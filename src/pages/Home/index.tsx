import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import Skeleton from "react-loading-skeleton";

import Modal from "../../components/form/Modal";
import ModalCancel from "../../components/form/ModalCancel";
import SelectDefault from "../../components/form/SelectDefault";
import ButtonDefault from "../../components/form/ButtonDefault";
import ButtonNotification from "../../components/form/ButtonNotification";
import InputDefault from "../../components/form/InputDefault";

import IconBallonMessage from "../../assets/icons/IconBallonMessage";
import IconCancel from "../../assets/icons/IconCancel";

import {
  Container,
  SectionFilter,
  Field,
  Main,
  SectionTable,
  SectionPagination,
  PaginationButton,
  PaginationItem,
  ButtonPagination,
} from "./styles";

interface OrderProps {
  id_grafica: string;
  nome_usuario: string;
  unidade: string;
  setor: string;
  id_pedido: string;
  qtd_paginas: number;
  qtd_copias: number;
  valor: number;
  criado: string;
  status: string;
}

interface ModalProps {
  title?: string;
  subtitle?: string;
  textArea?: boolean;
  buttonSend?: string;
  buttonCancel?: string;
  message?: {
    titleMessage?: string;
    subtitleMessage?: string;
  };
}

const limit = 10;

export default function Home() {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<OrderProps[]>([]);
  const [idModal, setIdModal] = useState(Number);
  const [dataModal, setDataModal] = useState<ModalProps>();
  const [modalCancel, setModalCancel] = useState(false);
  const [dataModalCancel, setDataModalCancel] = useState<ModalProps>();

  const [filterStatus, setFilterStatus] = useState("todos");
  const [filterOrder, setFilterOrder] = useState("criado");
  const [filterQuantity, setFilterQuantity] = useState("0-99999");
  const [search, setSearch] = useState("");

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState<any>(1);

  console.log(search)

  useEffect(() => {
    setLoad(true);
    api
      .get(
        `pedido-grafica?status=${filterStatus}&ordem=${filterOrder}&pagina=${currentPage}&quantidade=${filterQuantity}&perPage=${limit}pesquisa=pedido=${search}`,
      )
      .then(res => {
        setData(res.data.result.data);
        setTotal(res.data.result.pagination.total);
        const totalPages = Math.ceil(total / limit);

        const arrayPages = [];
        for (let i = 0; i < totalPages; i++) {
          arrayPages.push(i);
        }

        setPages(arrayPages as any);
        setLoad(false);
      });
  }, [filterOrder, filterStatus, filterQuantity, total, currentPage, search]);

  function handleOnOffSide(id: any) {
    setIdModal(id);
    setModal(!modal);

    setDataModal({
      title: "Deseja enviar um empedimento?",
      subtitle:
        "Caso o arquivo esteja com algum defeito ou dúvidas, mande uma mensagem avisando a Escola",
      textArea: true,
      buttonSend: "Enviar",
      buttonCancel: "Cancelar",
      message: {
        titleMessage: "Impedimento registrado com sucesso",
        subtitleMessage: "Uma boa descrição",
      },
    });
  }

  function handleOnCancel(id: any) {
    setIdModal(id);
    setModalCancel(!modalCancel);

    setDataModalCancel({
      title: "Tem certeza que deseja Cancelar esse pedido?",
      subtitle:
        "Para cancelar é necessario colocar um impedimento avisando o motivo do cancelamento.",
      textArea: true,
      buttonSend: "Excluir",
      buttonCancel: "Voltar",
      message: {
        titleMessage: "Impedimento registrado com sucesso",
        subtitleMessage: "Uma boa descrição",
      },
    });
  }

  function handleOnFilterStatus(value: any) {
    setFilterStatus(value)
    setCurrentPage(1)
  }

  function handleOnFilterOrder(value: any) {
    setFilterOrder(value)
    setCurrentPage(1)
  }

  function handleOnFilterQuantity(value: any) {
    setFilterQuantity(value)
    setCurrentPage(1)
  }

  function handleOnSearch(value: any) {
    setSearch(value)
    setCurrentPage(1)
  }

  return (
    <Container>
      <SectionFilter>
        <h1 className="TitleHome">Pedidos</h1>
        <Field className="SelectDefault">
          <SelectDefault
            isWidth={true}
            value="todos"
            placeholder="Selecione Status"
            onChangeText={value => handleOnFilterStatus(value)}
          >
            <option value="concluido">Concluido</option>
            <option value="pendente">Pendente</option>
            <option value="cancelado">Cancelado</option>
            <option value="todos">Todos</option>
          </SelectDefault>
        </Field>

        <Field className="SelectDefault">
          <SelectDefault
            isWidth={true}
            value="criado"
            placeholder="Selecione Filtro"
            onChangeText={value => handleOnFilterOrder(value)}
          >
            <option value="criado">Mais recente</option>
            <option value="id_usuario">Usuario</option>
          </SelectDefault>
        </Field>

        <Field className="SelectFr">
          <SelectDefault
            isWidth={true}
            value="0-99999"
            placeholder="Filtrar por Quantidade"
            onChangeText={value => handleOnFilterQuantity(value)}
          >
            <option value="0-50">0 a 50</option>
            <option value="50-100">50 a 100</option>
            <option value="100-150">100 a 150</option>
            <option value="0-99999">Todos</option>
          </SelectDefault>
        </Field>

        <Field className="SearchDefault">
          <InputDefault
            search={true}
            placeholder={"Busca"}
            value={""}
            onChangeText={value => handleOnSearch(value)}
          />
        </Field>
      </SectionFilter>

      <Main>
        <SectionTable>
          {load ? (
            <>
              <Skeleton height={"40px"} />
              <Skeleton count={4} height={80} />
            </>
          ) : (
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
                {data.map(row => (
                  <tr key={row.id_pedido}>
                    <td>
                      <ButtonDefault
                        status="visualizar"
                        border={true}
                        text="Visualizar"
                        onClick={() => history.push(`/pedido/${row.id_pedido}`)}
                      />
                    </td>
                    <td>{row.nome_usuario}</td>
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
                        onClick={() => handleOnOffSide(row.id_pedido)}
                      />
                    </td>
                    <td>
                      <ButtonNotification
                        icon={<IconCancel />}
                        disabled={row.status === "cancelado" ? true : false}
                        onClick={() => handleOnCancel(row.id_pedido)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </SectionTable>

        <SectionPagination>
          <PaginationButton>
            <ButtonPagination
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage < 2}
              isActive={currentPage < 2}
            >
              Voltar
            </ButtonPagination>
            {pages.map(page => (
              <PaginationItem
                isSelect={page + 1 === currentPage}
                key={page}
                onClick={() => setCurrentPage(parseInt(page) + 1)}
                disabled={page + 1 === currentPage}
              >
                {page + 1}
              </PaginationItem>
            ))}
            <ButtonPagination
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pages.length}
              isActive={currentPage === pages.length}
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
        idRequest={idModal}
        dataModal={dataModal as any}
      />

      <ModalCancel
        id="overlayModal"
        onClose={() => setModalCancel(!modalCancel)}
        openModal={modalCancel}
        idRequest={idModal}
        dataModal={dataModalCancel as any}
      />
    </Container>
  );
}

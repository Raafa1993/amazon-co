import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import IconBallonMessage from "../../assets/icons/IconBallonMessage";
import IconCancel from "../../assets/icons/IconCancel";
import ButtonDefault from "../../components/form/ButtonDefault";
import ButtonLinear from "../../components/form/ButtonLinear";
import ButtonNotification from "../../components/form/ButtonNotification";
import InputDefault from "../../components/form/InputDefault";
import SelectDefault from "../../components/form/SelectDefault";
import api from "../../services/api";

import IconEyer from "../../assets/icons/IconEyer";
import ModalUser from "../../components/form/ModalUser";

import {
  ButtonPagination,
  PaginationButton,
  PaginationItem,
} from "../../components/form/Pagination/styles";

import {
  Container,
  SectionFilter,
  Filter,
  Separator,
  SectionTable,
  SectionPagination,
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
  qtdImpedimentos: number;
}

interface ModalProps {
  title?: string;
  textArea?: boolean;
  buttonSend?: string;
  buttonCancel?: string;
}

const limit = 9;

export default function HomeUser() {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<OrderProps[]>([]);
  const [load, setLoad] = useState(true);
  const [idModal, setIdModal] = useState(0);
  const [dataModal, setDataModal] = useState<ModalProps>();

  const [filterStatus, setFilterStatus] = useState("todos");
  const [filterOrder, setFilterOrder] = useState("criado");


  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([0, 1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setLoad(true);
    api
      .get(`pedido-usuario?status=${filterStatus}&ordem=${filterOrder}&pagina=1`)
      .then(res => {
        setData(res.data.result.data);
      });
    setLoad(false);
  }, [filterStatus, filterOrder]);

  function handleOnOffSide(id: any) {
    setIdModal(id);
    setModal(!modal);

    setDataModal({
      title: "Houve um impedimento",
      textArea: true,
      buttonSend: "Ir para detalhes do pedido",
      buttonCancel: "Cancelar",
    });
  }

  return (
    <Container>
      <SectionFilter>
        <h1 className="titleMyRequest">Meus Pedidos</h1>
        <Filter>
          <SelectDefault
            value="todos"
            placeholder="Selecione Status"
            onChangeText={value => setFilterStatus(value)}
          >
            <option value="concluido">Concluido</option>
            <option value="pendente">Pendente</option>
            <option value="impedimento">Impedimento</option>
            <option value="todos">Todos</option>
          </SelectDefault>

          <SelectDefault
            value=""
            placeholder="Selecione Filtro"
            onChangeText={value => setFilterOrder(value)}
          >
            <option value="criado">Mais recente</option>
            <option value="nome">Nome</option>
            <option value="usuario">Usuario</option>
          </SelectDefault>

          <Separator />
        </Filter>

        <InputDefault
          onChangeText={value => console.log(value)}
          value={""}
          search={true}
          placeholder={"Busca com icone"}
        />

        <Separator />

        <ButtonDefault
          status="concluido"
          text="Fazer novo Pedido"
          onClick={() => history.push("/novo-pedido")}
        />
      </SectionFilter>

      <SectionTable>
          <table>
            <thead>
              <tr>
                <th align="center" style={{width: '10px'}}>Visualizar</th>
                <th>Pedido</th>
                <th>Qtd. de Páginas</th>
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
                      text="visualizar"
                      icon={<IconEyer />}
                      onClick={() => history.push(`/pedido/${row.id_pedido}`)}
                    />
                  </td>
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
                  <td align="center" width={10}>
                    <ButtonLinear
                      status={row.status}
                      border={true}
                      text={row.status}
                    />
                  </td>
                  <td align="center" width={10}>
                    <ButtonNotification
                      icon={<IconBallonMessage />}
                      mentions={row.qtdImpedimentos}
                      disabled={row.qtdImpedimentos > 0 ? false : true}
                      onClick={() => handleOnOffSide(row.id_pedido)}
                    />
                  </td>
                  <td align="center" width={10}>
                    <ButtonNotification icon={<IconCancel />} disabled />
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

      <ModalUser
        id="overlayModal"
        idRequest={idModal}
        onClose={() => setModal(!modal)}
        openModal={modal}
        dataModal={dataModal as any}
      />
    </Container>
  );
}

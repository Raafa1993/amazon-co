import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import IconBallonMessage from "../../assets/icons/IconBallonMessage";
import IconCancel from "../../assets/icons/IconCancel";
import IconEyer from "../../assets/icons/IconEyer";
import ButtonDefault from "../../components/form/ButtonDefault";
import ButtonLinear from "../../components/form/ButtonLinear";
import ButtonNotification from "../../components/form/ButtonNotification";
import InputDefault from "../../components/form/InputDefault";
import Modal from "../../components/form/Modal";
import {
  ButtonPagination,
  PaginationButton,
  PaginationItem,
} from "../../components/form/Pagination/styles";
import SelectDefault from "../../components/form/SelectDefault";
import { api } from "../../services/api";
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
}

export default function MyRequests() {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<OrderProps[]>([]);
  const [load, setLoad] = useState(true);
  const [status, setStatus] = useState('pendente')

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([0, 1, 2, 3, 4]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setLoad(true)
    api.get(`pedido-usuario?status=${status}&ordem=criado&pagina=1`).then(res => {
      setData(res.data.result.data)
      setLoad(false)
    })
  }, [status])

  console.log(load)

  return (
    <Container>
      <SectionFilter>
        <h1 className="titleMyRequest">Meus Pedidos</h1>
        <Filter>
          <SelectDefault
            value=""
            placeholder="Status"
            onChangeText={value => setStatus(value)}
          >
            <option value="pendente">Pendente</option>
            <option value="impedimento">Impedimento</option>
            <option value="todos">Todos</option>
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
              <th>Visualizar</th>
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
            {data.map((row) => (
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
                <td>
                  <ButtonLinear
                    status={row.status}
                    border={true}
                    text={row.status}
                  />
                </td>
                <td>
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

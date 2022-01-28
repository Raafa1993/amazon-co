import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";
import ButtonDefault from "../ButtonDefault";
import InputTextarea from "../InputTextarea";
import {
  ContainerOverlay,
  Container,
  TitleModal,
  SectionTextArea,
  SectionButtonsModal,
} from "./styles";

interface DataModalProps {
  title: string;
  textArea?: boolean;
  buttonSend?: string;
  buttonCancel?: string;
}

interface ModalProps {
  id: string;
  idRequest?: number;
  onClose: () => void;
  openModal: boolean;
  dataModal: DataModalProps;
}

export default function ModalUser({
  id,
  onClose,
  idRequest,
  openModal,
  dataModal,
}: ModalProps) {
  const handleCloseModal = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  const history = useHistory()
  const [description, setDescription] = useState("");
  const [data, setData] = useState({} as any)

  function handleOnRequest() {
    onClose();
    history.push(`/pedido/${idRequest}`)
  }

  useEffect(() => {
    api.get(`pedido-impedimento/${idRequest}`).then((res) => {
      setData(res.data.result[0])
    })
  }, [idRequest])

  return (
    <ContainerOverlay id={id} openModal={openModal} onClick={handleCloseModal}>
      <Container openModal={openModal}>
        <TitleModal>
          <h1>{dataModal?.title}</h1>
        </TitleModal>

        <SectionTextArea>
          <InputTextarea
            onChangeText={value => setDescription(value)}
            placeholder="Digite aqui"
            disabled
            value={data?.descricao}
          />
        </SectionTextArea>

        <SectionButtonsModal>
          {dataModal?.buttonSend && (
            <ButtonDefault
              status="concluido"
              text={dataModal?.buttonSend}
              onClick={handleOnRequest}
            />
          )}

          {dataModal?.buttonCancel && (
            <ButtonDefault
              status="pendente"
              text={dataModal?.buttonCancel}
              onClick={onClose}
            />
          )}
        </SectionButtonsModal>
      </Container>
    </ContainerOverlay>
  );
}

import { useState } from "react";
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
  subtitle?: string;
  textArea?: boolean;
  buttonSend?: string;
  buttonCancel?: string;
  message: {
    titleMessage?: string;
    subtitleMessage?: string;
  };
}

interface ModalProps {
  id: string;
  idRequest?: number;
  onClose: () => void;
  openModal: boolean;
  dataModal: DataModalProps;
}

interface ResModal {
  message: string;
}

export default function ModalCancel({
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

  const [submit, setSubmit] = useState(true);
  const [description, setDescription] = useState("");
  const [data, setData] = useState<ResModal>({
    message: "",
  });

  function handleOnCloseMessage() {
    setSubmit(!submit);
    onClose();
    window.location.reload();
  }

  function handleOnCancelRequest() {
    api.put(`pedido/${idRequest}`, {
      motivo_cancelamento: description
    }).then((res) => {
      setData(res.data)
      setSubmit(!setSubmit);
    })
  }

  console.log(description)

  return (
    <>
      {submit === true ? (
        <ContainerOverlay
          id={id}
          openModal={openModal}
          onClick={handleCloseModal}
        >
          <Container openModal={openModal}>
            <TitleModal>
              <h1>{dataModal?.title}</h1>
              {dataModal?.subtitle && <span>{dataModal?.subtitle}</span>}
            </TitleModal>

              <SectionTextArea>
                <InputTextarea
                  onChangeText={value => setDescription(value)}
                  placeholder="Digite aqui, minimo 10 caracteres"
                  value={""}
                />
              </SectionTextArea>

            <SectionButtonsModal>
              {dataModal?.buttonSend && (
                <ButtonDefault
                  status="pendente"
                  text={dataModal?.buttonSend}
                  onClick={handleOnCancelRequest}
                  disabled={description.length > 10 ? false : true}
                />
              )}

              {dataModal?.buttonCancel && (
                <ButtonDefault
                  status="concluido"
                  text={dataModal?.buttonCancel}
                  onClick={onClose}
                />
              )}
            </SectionButtonsModal>
          </Container>
        </ContainerOverlay>
      ) : (
        <ContainerOverlay
          id={id}
          openModal={openModal}
          onClick={handleOnCloseMessage}
        >
          <Container openModal={openModal} onClick={handleCloseModal}>
            <TitleModal>
              <h1>{data?.message}</h1>
            </TitleModal>

            <SectionButtonsModal>
              <ButtonDefault
                status="concluido"
                text={"Continuar"}
                onClick={handleOnCloseMessage}
              />
            </SectionButtonsModal>
          </Container>
        </ContainerOverlay>
      )}
    </>
  );
}

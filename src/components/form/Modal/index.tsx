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
  // title: string;
  // subtitle?: string;
  // textArea?: boolean;
  // buttonSend?: string;
  // buttonCancel?: string;

  // message: {
  //   titleMessage: string;
  //   subtitleMessage?: string;
  // };

  dataModal: DataModalProps;
}

export default function Modal({
  id,
  onClose,
  idRequest,
  openModal,
  // title,
  // subtitle,
  // textArea,
  // buttonSend,
  // buttonCancel,
  // message,
  dataModal
}: ModalProps) {
  const handleCloseModal = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  const [submit, setSubmit] = useState(true);
  const [description, setDescription] = useState('');

  function handleOnCloseMessage() {
    setSubmit(!submit);
    onClose();
  }

  function offSide() {
    api.post(`pedido-impedimento`,{
      "id_pedido": id,
      "descricao": description
    }).then((res) => {
      console.log(res)
    })
  }

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

            {dataModal?.textArea && (
              <SectionTextArea>
                <InputTextarea
                  onChangeText={value => setDescription(value)}
                  placeholder="Digite aqui"
                  value={""}
                />
              </SectionTextArea>
            )}

            <SectionButtonsModal>
              {dataModal?.buttonSend && (
                <ButtonDefault
                  status="concluido"
                  text={dataModal?.buttonSend}
                  onClick={offSide}
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
      ) : (
        <ContainerOverlay
          id={id}
          openModal={openModal}
          onClick={handleOnCloseMessage}
        >
          <Container openModal={openModal} onClick={handleCloseModal}>
            <TitleModal>
              <h1>{dataModal?.message.titleMessage}</h1>
              {dataModal?.message.subtitleMessage && <span>{dataModal?.subtitle}</span>}
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

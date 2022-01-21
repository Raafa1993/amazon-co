import { useState } from "react";
import ButtonDefault from "../ButtonDefault";
import InputTextarea from "../InputTextarea";
import {
  ContainerOverlay,
  Container,
  TitleModal,
  SectionTextArea,
  SectionButtonsModal,
} from "./styles";

interface ModalProps {
  id: string;
  onClose: () => void;
  openModal: boolean;
  title: string;
  subtitle?: string;
  textArea?: boolean;
  buttonSend?: string;
  buttonCancel?: string;

  message: {
    titleMessage: string;
    subtitleMessage?: string;
  };
}

export default function Modal({
  id,
  onClose,
  openModal,
  title,
  subtitle,
  textArea,
  buttonSend,
  buttonCancel,
  message,
}: ModalProps) {
  const handleCloseModal = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  const [submit, setSubmit] = useState(true);

  function handleOnCloseMessage() {
    setSubmit(!submit);
    onClose();
  }

  return (
    <>
      {submit == true ? (
        <ContainerOverlay
          id={id}
          openModal={openModal}
          onClick={handleCloseModal}
        >
          <Container openModal={openModal}>
            <TitleModal>
              <h1>{title}</h1>
              {subtitle && <span>{subtitle}</span>}
            </TitleModal>

            {textArea && (
              <SectionTextArea>
                <InputTextarea
                  onChangeText={value => console.log(value)}
                  placeholder="Digite aqui"
                  value={""}
                />
              </SectionTextArea>
            )}

            <SectionButtonsModal>
              {buttonSend && (
                <ButtonDefault
                  status="Concluido"
                  text={buttonSend}
                  onClick={() => setSubmit(!submit)}
                />
              )}

              {buttonCancel && (
                <ButtonDefault
                  status="Pendente"
                  text={buttonCancel}
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
              <h1>{message.titleMessage}</h1>
              {message.subtitleMessage && <span>{subtitle}</span>}
            </TitleModal>

            <SectionButtonsModal>
              <ButtonDefault
                status="Concluido"
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

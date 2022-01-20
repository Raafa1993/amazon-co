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
}: ModalProps) {
  const handleCloseModal = (e: any) => {
    if (e.target.id === id) {
      onClose();
    }
  };

  return (
    <ContainerOverlay id={id} openModal={openModal} onClick={handleCloseModal}>
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
              onClick={() => console.log("clicou")}
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
  );
}

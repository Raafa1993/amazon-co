import ButtonDefault from "../ButtonDefault";
import InputTextarea from "../InputTextarea";
import { 
    ContainerOverlay, 
    Container,
    TitleModal,
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
          {subtitle && (
            <span>
                Para cancelar é necessario colocar um procedimento avisando o motivo
                do cancelamento
            </span>
          )}
        </TitleModal>

        {textArea && (
            <InputTextarea
              onChangeText={value => console.log(value)}
              value={"value"}
            />
        )}

        {buttonSend && (
            <ButtonDefault 
                status="Pendente"
                text={buttonSend}
            />
        )}

        {buttonCancel && (
            <ButtonDefault 
                status="Concluido"
                text={buttonCancel}    
            />
        )}

      </Container>
    </ContainerOverlay>
  );
}

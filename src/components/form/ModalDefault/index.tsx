import { ContainerOverlay, Container } from './styles'

interface ModalProps {
    id: string
    children: any
    onClose: () => void
    openModal: boolean
    width?: string
}

export default function ModalDefault({ id, onClose, width, openModal, children }: ModalProps) {
    const handleCloseModal = (e: any) => {
        if (e.target.id === id) {
            onClose()
        }
    }
    
    return (
        <ContainerOverlay id={id} openModal={openModal} onClick={handleCloseModal}>
            <Container 
                width={width}
                openModal={openModal}
            >
                {children}
            </Container>
        </ContainerOverlay>
    )
}

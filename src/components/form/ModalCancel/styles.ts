import styled from "styled-components";

interface Props {
  openModal: boolean;
}

export const ContainerOverlay = styled.div<Props>`
  background: rgba(255, 255, 255, 0.7);
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: ${props => (props.openModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 580px;
  background: #fff;
  box-shadow: 5px 5px 30px #0000001a;
  border-radius: 16px;
  padding: 40px 50px;
  margin: 0 20px;

  /* transform: ${props => (props.openModal ? "translateY(0px)" : "translateY(30px)")};
  visibility: ${props => (props.openModal ? "visible" : "hidden")};
  opacity: ${props => (props.openModal ? "1" : "0")};
  transition: all 0.35s; */
`;

export const TitleModal = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.56rem;
    font-weight: bold;
    color: var(--darkBlack);
    text-align: center;
  }

  span {
    font-size: 1rem;
    color: var(--gray);
    margin-top: 20px;
    text-align: center;
  }
`;

export const SectionTextArea = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const SectionButtonsModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 60px;
  width: 100%;
`;

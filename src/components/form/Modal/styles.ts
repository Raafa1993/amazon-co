import styled from 'styled-components';

interface Props {
  openModal: boolean
}

export const ContainerOverlay = styled.div<Props>`
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: ${props => props.openModal ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #fff;

    border-radius: 16px;
    padding: 40px 60px;
    margin: 0 20px;

    
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

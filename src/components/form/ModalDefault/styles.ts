import styled from 'styled-components';

interface Props {
  openModal: boolean
  width?: string;
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
    padding: 24px;

    width: ${props => props.width ? props.width : '400px'};  
    /* gap: 10px; */
`;

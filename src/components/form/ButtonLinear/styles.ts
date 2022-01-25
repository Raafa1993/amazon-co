import styled, { css } from "styled-components";

interface PropsButton {
  status: string;
  border?: boolean;
}

export const Container = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  border: none;
  padding: 10px 40px;
  transition: filter 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  
  ${props => props.border && css`
  border-radius: 25px;
  `}
  
  background: transparent;
  
  color: ${props =>
    props.status === "Pendente"
      ? "#9D54BB"
      : "#fff" && props.status === "Concluido"
      ? "#51C4AF"
      : "#fff" && props.status === "Cancelado"
      ? "#D9538D"
      : "#fff" && props.status === "Visualizar"
      ? "#5178C4"
      : "#fff" };


  border: ${props =>
    props.status === "Pendente"
      ? " 1px solid #9D54BB"
      : "#fff" && props.status === "Concluido"
      ? " 1px solid #51C4AF"
      : "#fff" && props.status === "Cancelado"
      ? " 1px solid #D9538D"
      : "#fff" && props.status === "Visualizar"
      ? " 1px solid #5178C4"
      : "#fff" };
`;

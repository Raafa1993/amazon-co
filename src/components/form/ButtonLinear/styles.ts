import styled, { css } from "styled-components";

interface PropsButton {
  status: string;
  border?: boolean;
}

export const Container = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  text-transform: capitalize;
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
    props.status === "pendente"
      ? "#9D54BB"
      : "#fff" && props.status === "concluido"
      ? "#51C4AF"
      : "#fff" && props.status === "cancelado"
      ? "#D9538D"
      : "#fff" && props.status === "visualizar"
      ? "#5178C4"
      : "#fff" };


  border: ${props =>
    props.status === "pendente"
      ? " 1px solid #9D54BB"
      : "#fff" && props.status === "concluido"
      ? " 1px solid #51C4AF"
      : "#fff" && props.status === "cancelado"
      ? " 1px solid #D9538D"
      : "#fff" && props.status === "visualizar"
      ? " 1px solid #5178C4"
      : "#fff" };
`;

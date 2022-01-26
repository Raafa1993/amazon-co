import styled, { css } from "styled-components";

interface PropsButton {
  status: string;
  border?: boolean;
  icon?: boolean;
}

export const Container = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  text-transform: capitalize;
  color: #fff;
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

  background: ${props =>
    props.status === "pendente"
      ? "#9D54BB"
      : "#fff" && props.status === "concluido"
      ? "#51C4AF"
      : "#fff" && props.status === "cancelado"
      ? "#D9538D"
      : "#fff" && props.status === "visualizar"
      ? "#5178C4"
      : "#fff" };

 .hasIcon {
   display: grid;
   place-items: center;
   margin-right: 12px;
 }

`;

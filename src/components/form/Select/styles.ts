import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused?: boolean;
  isField?: boolean;
  isDisabled?: Boolean; 
}

export const Label = styled.label<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  font-size: 1rem;
  color: var(--darkBlack);
  font-weight: 600;
  text-transform: capitalize;

  & + div {
    margin-top: 34px;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  height: 50px;
  background: #fff;
  border: 1px solid var(--liteGray);
  border-radius: 2px;
  box-shadow: 0px 3px 6px #00000029;
  position: relative;

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--green);
    `}

    ${props => props.isDisabled && css`
        box-shadow: none;
        opacity: 0.4;
    `}

  select {
    appearance: none;
    width: 100%;
    height: 50px;
    padding: 14px 14px;
    font-size: 1rem;
    background: transparent;
    border: none;
    border-radius: 2px;
    outline: none;
    color: var(--darkBlack);
    z-index: 5;

    &::placeholder {
      color: #959595;
      font-size: 14px;
    }

    ${props => props.isDisabled && css`
      cursor: not-allowed;
      opacity: 0.4;
    `}
  }

  svg {
    position: absolute;
    right: 4%;
    top: 40%;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    path {
      stroke: #474747;
    }

    ${props =>
      props.isFocused &&
      css`
        path {
          stroke: var(--green);
        }
      `}

      ${props => props.isDisabled && css`
        opacity: 0.4;
    `}
  }

  /* label {
      font-size: 16px;
      text-transform: capitalize;
      font-weight: 600;
      margin-bottom: 12px;
    } */
`;

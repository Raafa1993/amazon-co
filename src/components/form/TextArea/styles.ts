import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: transparent;
  border-radius: 8px;
  color: #6c6c80;
  display: flex;
  flex-direction: column;
  position: relative;

  textarea {
    flex: 1;
    max-width: 100%;
    height: 147px;
    padding: 14px 14px;
    font-size: 16px;
    background: #fff;
    border: 1px solid #e4e4e4;
    outline: none;
    color: #000;
    resize: none;
    &::placeholder {
      color: #e4e4e4;
      font-size: 14px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      color: #474747;
      font-weight: 600;
    }

    ${props =>
      props.isFocused &&
      css`
        border: 1px solid var(--green);
      `}

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }

  label {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 12px;

    ${props =>
      props.isFocused &&
      css`
        color: var(--green);
      `}

    ${props =>
      props.isField &&
      css`
        color: var(--green);
      `}
  }
`;

export const Error = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0px;
  * {
    animation: fadeInUp 0.4s linear;
  }
  span {
    font-size: 12px;
    font-weight: 600;
    color: #c53030;
  }
`;

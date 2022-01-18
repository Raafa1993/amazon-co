import styled, { css } from "styled-components";

interface Props {
    value: string;
    isField: boolean;
    isFocused: boolean;
  }

export const Container = styled.div<Props>`
  width: 100%;
  background: transparent;
  border-radius: 8px;
  color: #6c6c80;
  display: flex;
  flex-direction: column;
  position: relative;
  * {
    transition: all 0.2s;
  }
  & + div {
    margin-top: 34px;
  }
  input {
    flex: 1;
    width: 100%;
    height: 50px;
    padding: 14px 14px;
    font-size: 16px;
    background: #fff;
    border: 1px solid #E4E4E4;
    outline: none;
    color: #000;
    &::placeholder {
      color: #E4E4E4;
      font-size: 14px;
    }

    ${props =>
    props.isFocused &&
    css`
      /* color: var(--blue); */
      border: 1px solid var(--green);
    `}
  /* ${props =>
    props.isField &&
    css`
      color: var(--green);
    `} */
  }

  button {
    display: grid;
    place-items: center;
    border: none;
    background: transparent;
    position: absolute;
    right: 12px;
    bottom: 12px;
    z-index: 10;
  }

  label {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 12px;
    /* position: absolute; */
    /* top: ${(props) => (props.value ? "6px" : "15px")}; */
    /* font-size: ${(props) => (props.value ? "10px" : "16px")}; */
  }
`;

export const Error = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: -22px;
  * {
    animation: fadeInUp 0.4s linear;
  }
  span {
    font-size: 12px;
    font-weight: 600;
    color: #c53030;
  }
`;
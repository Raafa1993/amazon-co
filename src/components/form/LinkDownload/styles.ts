import styled, { css } from "styled-components";

interface Props {
  isFocused: boolean;
  isDisabled?: boolean;
}

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: var(--darkBlack);
`;

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #fff;
  padding: 0px 10px;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 5px 10px #0000001A;
  border-radius: 2px;
  position: relative;
  margin-top: 12px;

  ${props => props.isFocused && css`
    border: 1px solid var(--green);
  `}

  transition: all 0.2s;

  a {
    flex: 1;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding-left: 48px;
    line-height: 4px;
    background: transparent;
    color: var(--black);
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    left: 0;

    display: flex;
    align-items: center;

    &::placeholder {
      color: #fff;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      color: #474747;
      font-weight: 600;
    }
  }
  svg {
    margin-right: 10px;
  }

  label {
    font-size: 10px;
    color: red;
  }
`;

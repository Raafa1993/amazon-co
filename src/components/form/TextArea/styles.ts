import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
//   isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    background: transparent;
    border-radius: 8px;
    color: #6c6c80;
    display: flex;
    flex-direction: column;
    position: relative;

  /* ${props =>
    props.isFocused &&
    css`
      color: var(--black);
      border-color: var(--gray);
    `}
  ${props =>
    props.isField &&
    css`
      color: var(--black);
    `} */
  textarea {
    flex: 1;
    max-width: 100%;
    height: 147px;
    padding: 14px 14px;
    font-size: 16px;
    background: #fff;
    border: 1px solid #E4E4E4;
    outline: none;
    color: #000;
    resize: none;
    &::placeholder {
      color: #E4E4E4;
      font-size: 14px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      color: #474747;
      font-weight: 600;
    }

    ${props => props.isFocused && css`
      border: 1px solid var(--green);
    `}
  }

  label {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

import styled from "styled-components";

interface PropsButton {
  mentions?: number;
}

export const Button = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &::after {
    background-color: var(--violet);
    width: auto;
    height: 14px;
    padding: 0 4px;
    position: absolute;
    bottom: 20px;
    right: 4px;
    border-radius: 50%;
    border: 4px solid var(--violet);
    text-align: right;
    font-size: 11px;
    font-weight: bold;
    color: #fff;
    content: "${props => props.mentions && props.mentions}";
    display: ${props =>
      props.mentions && props.mentions > 0 ? "inline" : "none"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

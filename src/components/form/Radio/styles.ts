import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  50% {
    opacity: 0.28;
  }
  100% {
    opacity: 0;
    transform: scale(0.65);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;

  input {
    position: absolute;
    transition: scale(0);
    appearance: none;
  }

  .radioButton {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid var(--liteGray);
  }

  .radioButtonInner {
    display: block;
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--green);
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    transition: all 0.35s;
  }

  .radioLabel {
    font-size: 0.937rem;
    color: var(--black);
  }

  .radioPulse {
    position: absolute;
    display: none;
    top: -17px;
    left: -20px;
    z-index: 10;
    opacity: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--green);
    animation: ${pulse} 0.5s linear;
  }

  input:checked ~ .radioButton .radioButtonInner {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  input:checked ~ .radioPulse {
    display: block;
  }

  input:checked ~ .radioButton {
    border-color: var(--green);
  }

  input:checked ~ .radioLabel {
    color: var(--darkBlack);
  }
`;

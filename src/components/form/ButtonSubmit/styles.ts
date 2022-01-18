import styled from "styled-components";

interface PropsButton {
    isLoading: number;
  }
  
  export const Container = styled.button<PropsButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background: var(--green);
    border: none;
    padding: 0 16px;
    margin-top: 40px;
    transition: filter 0.3s;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
  }
    cursor: ${({ isLoading }) => (isLoading ? 'not-allowewd' : 'pointer')}
  `;
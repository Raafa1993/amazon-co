import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  background: #f2f5fc;
  padding: 40px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;

    width: 100%;
  }
`;

export const PanelLeft = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    color: var(--darkBlack);
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 38px;
    gap: 22px;

    @media (max-width: 680px) {
      margin-top: 24px;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--darkBlack);
    }

    .field {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      margin-top: 30px;
    }
  }
`;

export const PanelRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-left: 1px solid rgba(149, 149, 149, 0.4);
  padding-left: 60px;
  margin-top: 98px;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--darkBlack);
    margin-bottom: 10px;
  }

  @media (max-width: 680px) {
    border-left: 0;
    padding-left: 0;
    margin-top: 0;
  }
`;

export const BackToHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  padding: 40px;

  width: 36%;
  background: #fff;

  @media (max-width: 680px) {
    width: 100%;
  }

  .backHome {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    padding: 12px;

    border: none;
    background: transparent;

    font-size: 1rem;
    font-weight: bold;
    color: var(--green);

    svg {
      margin-right: 8px;
    }

    transition: filter 0.3s;
    &:hover {
      transition: filter 0.3s;
      filter: brightness(0.8);
    }
  }
`;

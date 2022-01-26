import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */

  /* background: #F2F5FC; */
  /* padding: 40px; */

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    color: var(--darkBlack);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 60px;

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
    @media (max-width: 680px) {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: #f2f5fc;
  padding: 40px;
`;

export const ChangePassword = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;

  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: var(--darkBlack);
  }

  span {
    font-size: 1rem;
    color: var(--gray);
    padding-left: 12px;
    margin-top: 12px;

    .passwordChange {
      border: none;
      background: transparent;
      font-size: 1rem;
      font-weight: bold;
      color: var(--green);
      margin-left: 8px;
    }
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

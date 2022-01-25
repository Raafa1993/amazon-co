import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #F2F5FC;
  padding: 40px;

`;

export const SectionFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: grid;
  grid-template-columns: 15% 37% 25% 5% 15%;
  align-items: center;
  transition: all 0.2s;

  .titleMyRequest {
    font-size: 30px;
    font-weight: bold;
    /* white-space: nowrap; */
    color: var(--darkBlack);
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "tt bt bt"
      "ft ft sr";
    gap: 22px;

    .titleMyRequest {
      grid-area: tt;
    }

    >button {
      grid-area: bt;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;

  @media (max-width: 1000px) {
    grid-area: ft;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 34px;
  background: var(--gray);
  margin: 0 auto;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    grid-area: sr;
  }
`;

export const SectionTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 60px;
  padding: 0 12px;
  margin-left: -12px;
  margin-right: -12px;

  @media (max-width: 1260px) {
    overflow-x: scroll;

    ::-webkit-scrollbar {
      /* width: 5px; */
      height: 6px;
      background-color: #f5f5f5;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--green);
      border-radius: 20px;
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    scrollbar-color: var(--green) transparent;
    scrollbar-width: thin;
  }

  @media (max-width: 1000px) {
    margin-top: 40px;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--darkBlack);
      font-weight: 400;
      white-space: nowrap;
      padding: 0.875rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      tr {
        background: #fff;
        td {
          padding: 1rem 1rem;
          border: 0;
          color: var(--darkBlack);
          white-space: nowrap;
          font-size: 16px;
          font-weight: normal;
        }
        
        transition: all 0.3s;
      }
      tr {
        &:hover {
          transform: scale(1.02);
          cursor: pointer;
        }
      }
    }
  }
`;

export const SectionPagination = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  margin-top: 20px;
  padding: 40px 0;

  h1 {
    font-size: 1rem;
  }
`;

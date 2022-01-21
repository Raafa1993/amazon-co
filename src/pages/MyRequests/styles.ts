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

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: var(--darkBlack);
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;
`;

export const Separator = styled.div`
  width: 1px;
  height: 34px;
  background: var(--gray);
  margin: 0 22px;
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  margin-top: 60px;

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
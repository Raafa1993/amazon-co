import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #F2F5FC;
  padding: 40px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

`;

export const SectionFilter = styled.div`
  display: grid;
  grid-template-columns: 15% 20% 20% 22% 20%;
  gap: 10px;

  @media(max-width: 1320px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "tt bt"
      "sc sc"
      "ft ft2";
    gap: 20px;
  }  
  .titleMyRequest {
    font-size: 1.87rem;
    white-space: nowrap;
    font-weight: bold;
    color: var(--darkBlack);

    @media(max-width: 1320px) {
      grid-area: tt;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  align-items: center;

    &.SearchDefault {
      @media(max-width: 1320px) {
        grid-area: sc;
      }
    }

    &.buttonDefault {
      @media(max-width: 1320px) {
        grid-area: bt;
      }
    }

    &.selectDefault {
      width: 100%;
     
      @media(max-width: 1320px) {
        grid-area: ft;
      }
    }

`;

export const Separator = styled.div`
  width: 1px;
  height: 34px;
  background: var(--gray);
  margin: 0 auto;
`;

export const SectionTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;

  margin-top: 60px;
  padding: 0 12px;
  margin-left: -12px;
  margin-right: -12px;

  @media (max-width: 1250px) {
    overflow-x: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar {
      /* width: 6px; */
      height: 6px;
      background-color: #f5f5f5;
      cursor: pointer;
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

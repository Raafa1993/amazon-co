import styled, { css } from "styled-components";

interface Props {
  isActive?: boolean;
  isSelect?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f2f5fc;
  padding: 40px;
`;

export const SectionFilter = styled.div`
  display: grid;
  grid-template-columns: 15% 60% 5% 20%;
  align-items: center;
  transition: all 0.2s;

  .TitleHome {
    font-size: 30px;
    font-weight: bold;
    color: var(--darkBlack);
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "tt sr"
      "ft ft";
    gap: 22px;

    .TitleHome {
      grid-area: tt;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;

  @media (max-width: 980px) {
    grid-area: ft;
  }
  transition: all 0.2s;
`;

export const Separator = styled.div`
  width: 1px;
  height: 34px;
  background: #f2f5fc;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 980px) {
    grid-area: sr;
  }
  transition: all 0.2s;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`

export const SectionTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 60px;
  padding: 0 12px;
  margin-left: -12px;
  margin-right: -12px;

  @media (max-width: 1540px) {
    overflow-x: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar {
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

  @media (max-width: 980px) {
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
  margin-top: 20px;
`;

export const PaginationButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PaginationItem = styled.button<Props>`
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: var(--darkGray);

  background: transparent;
  padding: .375rem;
  border-radius: .2rem;

  border: none;
  transition: filter 0.3s;
  &:hover {
    transition: all 0.3s;
    filter: brightness(0.9);
    background: rgba(10, 191, 158, 0.1);
    color: var(--green);
  }

  ${(props) =>
    props.isSelect && css`
      background: rgba(10, 191, 158, 0.1);
      color: var(--green);
      border: 0;
    `};
    
  ${(props) =>
    props.isActive && {
      background: "#bfbfcc",
      color: "#E1E3E5",
    }};
`;

export const ButtonPagination = styled.button<Props>`
  display: grid;
  place-items: center;

  background: transparent;
  border: none;
  padding: .8rem;
  
  font-size: 1rem;
  font-weight: 500;
  color: var(--darkGray);

  ${props => props.isActive && css`
      cursor: not-allowed;
      opacity: 0.4;
  `}
`;

import styled, { css } from "styled-components";

interface Props {
  isActive?: boolean;
  isSelect?: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 2rem;
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

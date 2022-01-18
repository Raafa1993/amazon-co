import styled, { css } from "styled-components";

interface sidebarProps {
  active?: boolean;
  mentions?: number;
}

export const Container = styled.div<sidebarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 110px;
  padding: 0 40px;

`;

export const Ul = styled.ul<sidebarProps>`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const Li = styled.li<sidebarProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  
  a {
      display: flex;
      align-items: center;
      padding: 12px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: var(--gray);
    white-space: nowrap;

    ${props =>
      props.active &&
      css`
        color: var(--green);
      `}
  }

  ${props =>
    props.active &&
    css`
      &::after {
        position: absolute;
        content: "";
        top: 75px;
        left: 0;
        width: 90px;
        height: 5px;
        border-radius: 2px;
        background: var(--green);
      }
    `}
`;

export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Separator = styled.div`
    width: 1px;
    height: 34px;
    background: var(--green);
    margin: 0 30px;
`;

export const Profile = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  border: none;
  background: transparent;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;
  img {
    height: 48px;
    width: 48px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;

    h2 {
        font-size: 18px;
        color: #51C4AF;
        font-weight: normal;
    }

    svg {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;

        margin-left: 12px;
    }
`;

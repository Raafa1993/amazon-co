import styled, { css } from "styled-components";

interface sidebarProps {
  active?: boolean;
  mentions?: number;
  hasVisible?: boolean;
}

export const Container = styled.div<sidebarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px 40px;
  position: relative;
`;

export const Ul = styled.ul<sidebarProps>`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Li = styled.li<sidebarProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  span {
    font-size: 1.25rem;
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
        top: 52px;
        left: 0;
        width: 60px;
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

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  border: none;
  background: transparent;

  cursor: pointer;
  position: relative;
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

export const Info = styled.div<sidebarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  h2 {
    font-size: 18px;
    color: #51c4af;
    font-weight: normal;
  }

  svg {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: all 0.35s;

    margin-left: 12px;

    ${props => props.hasVisible && css`
      transform: rotate(90deg);
      transform-origin: 50% 50%;
    `}
  }

`;

export const MenuProfile = styled.div<sidebarProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 12px;

  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 10px 6px #00000029;

  position: absolute;
  z-index: 10;
  transform: translateY(0px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.35s;

  ${props => props.hasVisible && css`
    transform: translateY(60px);
    opacity: 1;
    visibility: visible;
    transition: all 0.35s;
  `}

  .buttonSignUp {
    display: flex;
    align-items: center;

    /* padding: 4px; */

    height: 40px;
    border: none;
    background: transparent;

    font-size: 1.25rem;
    font-weight: 500;
    color: var(--darkBlack);

    svg {
      margin-left: 20px;
      margin-right: 40px;
      margin-top: 3px;
      path {
        stroke: var(--darkBlack);
      }
    }
  }
`
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  height: 44px;
  border: 1px solid #fff;
  border-radius: 22px;
  background: #fff;
  position: relative;
  &:active {
    border: 1px solid #E4E4E4;
  }
  select {
    padding: 0px 51px 0px 21px;
    height: 100%;
    outline: none;
    border: none;
    flex: 1;
    max-width: 100%;
    color: #474747;
    background: #fff;
    border-radius: 22px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    z-index: 1;
    position: relative;
    text-overflow: "";
    &::placeholder {
      color: #959595;
    }
  }
  svg {
    position: absolute;
    z-index: 2;
    right: 0px;
    top: 0px;
    margin: 17px 21px;

    transform: rotate(-90deg);
    transform-origin: 50% 50%;

    path {
      stroke: #474747;
    }
  }
`;

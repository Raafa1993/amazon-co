import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Main = styled.div`
    flex: 1;
    width: 100%;

`;
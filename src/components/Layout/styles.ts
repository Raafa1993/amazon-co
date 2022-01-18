import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const Main = styled.div`
    flex: 1;
    overflow-y: scroll;
    width: 100%;
    padding: 0 40px;
    padding-top: 40px;
    background: #F2F5FC;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
import styled, { keyframes, css } from "styled-components";

interface Props {
    isUser: boolean;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 100%;
    height: 100vh;

    @media(max-width: 680px) {
        grid-template-columns: 1fr;
    }

`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const BgContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: #F2F5FC;

    @media(max-width: 680px) {
        display: none;
    }
`;

export const MainArte = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    img {
        width: 60%;
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 20px;
`;

export const ContentSignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 10%;
    height: 100vh;
`;

export const Contentinfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 20px;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    animation: ${appearFromLeft} 0.7s;
`;

export const WellcomeSignIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h1 {
        font-size: 32px;
        color: #474747;
    }

    span {
        font-size: 14px;
        color: #959595;
        margin-top: 14px;
    }

    ::after {
        content: '';
        width: 100%;
        height: 1px;
        background: #E4E4E4;
        margin-top: 40px;
    }
`;

export const OptionUser = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;

    h2 {
        font-size: 16px;
        color: #474747;
    }
`;

export const RadioOption = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    margin-top: 10px;

    .inputRadio {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 40px;

    form {
        display: flex;
        flex-direction: column;
    }

    .field {
        display: flex;
        flex-direction: column;
        margin-bottom: 14px;

        align-items: flex-end;

        .forgotPassword {
            display: flex;
            align-items: center;
            justify-content: center;
    
            font-size: 1rem;
            font-weight: bold;
            color: var(--green);
    
            background: transparent;
            border: none;
            margin-top: 14px;
        }
    }
`;

export const NotRegister = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
    opacity: 0;

    span {
        color: var(--gray);
    }

    button {
        border: none;
        background: transparent;

        color: var(--green);
        margin-left: 8px;
        font-weight: bold;
    }

    ${(props) => props.isUser && css`
        opacity: 1;
        animation: ${appearFromLeft} 0.7s;
    `}
`;

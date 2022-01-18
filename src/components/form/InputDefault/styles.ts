import styled from 'styled-components';

interface InputProps {
    type?: string;
}

export const Container = styled.label<InputProps>`
    border: 1px solid #E4E4E4;
    background: #fff;
    width: 100%;
    border-radius: 22px;
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0px 21px;
    font-size: 18px;

    &:active {
        border: 1px solid #E4E4E4;
    }

    input {
        height: 100%;
        outline: none;
        border: none;
        flex: 1;
        background: #fff;
        color: #474747;
        &::placeholder {
            color: #959595;
        }
    }
    svg {
        margin-right: 10px;
    }
`;

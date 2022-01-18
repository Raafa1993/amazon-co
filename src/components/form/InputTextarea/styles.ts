import styled from 'styled-components';

export const Container = styled.label`
    border: 1px solid var(--gray);
    border-radius: 4px;
    height: 100px;
    width: 100%;
    display: flex;
    padding: 8px 21px;
    &:active {
        border: 1px solid var(--gray);
    }

    textarea {
        height: 100%;
        width: 100%;
        outline: none;
        resize: none;
        border: none;
        background: transparent;
        color: var(--darkBlack);
        &::placeholder {
            color: var(--black);
        }
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }

        font-size: 14px;
        line-height: 150%;
    }
`;

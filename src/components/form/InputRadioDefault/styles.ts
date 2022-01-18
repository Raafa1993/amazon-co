import styled from 'styled-components';

interface InputProps {
    flexDirection: 'column' | 'row';
    maxColumn: any;
}

export const Container = styled.div<InputProps>`
    display: flex;
    align-items: center;
    gap: 12px;
    .input-radio {
        display: flex;
        align-items: center;
        padding-right: 8px;
        cursor: pointer;
        .radio {
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            border: 1px solid var(--liteGray);
            border-radius: 100px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            .bullet {
                width: 0px;
                height: 0px;
                border-radius: 100px;
                background: var(--green);
                transition: all 0.2s;
                &.active {
                    width: 10px;
                    height: 10px;
                }
            }
        }
        .label {
            padding: 0px 0px;
            font-size: 16px;
            color: var(--black);
            height: 40px;
            display: flex;
            align-items: center;
            margin-left: 4px;
        }
    }
`;

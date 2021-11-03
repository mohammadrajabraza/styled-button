import styled from 'styled-components'
export const Button = styled.button`
    color: #fff;
    font-size : 16px;
    line-height : 24px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 5px;
    border: 1px solid;

    ${props => props.primary && `
        background-color: #01579b;
        border-color: #01579b;
        &:hover {
            background-color: #0d47a1;
            border-color: #0d47a1;
        }

        &:active {
            background-color: #1565c0;
            border-color: #1565c0;
        }

        &:disabled {
            background-color: #0277bd;
            border-color: #0277bd;
        }
    `}

    ${props => props.secondary && `
        background-color : #33691e;
        border-color : #33691e;

        &:hover {
            background-color : #1b5e20;
            border-color : #1b5e20;
        }

        &:active {
            background-color : #2e7d32;
            border-color : #2e7d32;
        }

        &:disabled {
            background-color : #558b2f;
            border-color : #558b2f;
        }
    `}

    ${props => props.tertiary && `
        background-color : #ff6f00;
        border-color : #ff6f00;

        &:hover {
            background-color : #e65100;
            border-color : #e65100;
        }

        &:active {
            background-color : #ef6c00;
            border-color : #ef6c00;
        }

        &:disabled {
            background-color : #ff8f00;
            border-color : #ff8f00;
        }
    `}
`

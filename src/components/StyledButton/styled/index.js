import styled from 'styled-components'
export const Button = styled.button`
    background-color: #01579b;
    color: #fff;
    font-size : 16px;
    line-height : 24px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 5px;
    border: 1px solid #01579b;

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
`

import styled from 'styled-components'
export const Button = styled.button`
    color: #fff;
    font-size : 16px;
    line-height : 24px;
    font-weight: 400;
    padding: 6px 12px;
    border-radius: ${props => props.pill ? 50 : 5}px;
    border: 1px solid;

    ${props => props.fullWidth && `
        width: 100%;
    `}

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

    ${props => props.large && `
        font-size : 20px;
        line-height : 30px;
        padding : 8px 16px;
    `}

    ${props => props.small && `
        font-size : 14px;
        line-height : 21px;
        padding : 4px 8px;
    `}

    ${props => props.outlined && props.primary && `
        color: #01579b;
        border-color: #01579b;
        background-color: transparent;

        &:hover {
            background-color : #01579b;
            border-color : #01579b;
            color: #fff;
        }

        &:active {
            background-color : #1565c0;
            border-color : #1565c0;
            color: #fff;
        }

        &:disabled {
            color: #0277bd;
            border-color: #0277bd;
            background-color : transparent;
        }
    `}

    ${props => props.outlined && props.secondary && `
        color: #33691e;
        border-color: #33691e;
        background-color: transparent;

        &:hover {
            background-color : #33691e;
            border-color : #33691e;
            color: #fff;
        }

        &:active {
            background-color : #2e7d32;
            border-color : #2e7d32;
            color: #fff;
        }

        &:disabled {
            color: #558b2f;
            border-color: #558b2f;
            background-color : transparent;
        }
    `}
`

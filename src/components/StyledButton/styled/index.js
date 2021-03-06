import styled from 'styled-components'
export const Button = styled.button`
    color: #fff;
    font-size : 16px;
    line-height : 24px;
    font-weight: 400;
    padding: ${props => !props.hasText
        ? (props.pill ? '7px 2px' : '7px 4px')
        : '6px 12px'};
    border-radius: ${props => props.pill ? 50 : 5}px;
    border: 1px solid;

    svg {
        fill: #fff;
        height: 22px;
        width: 22px;
        margin-right: 4px;
        ${props => !props.hasText && 'margin-left : 6px;'}
    }

    ${props => props.hasChildren && `
        display: flex;
        align-items: center;
        justify-content: center;
    `}
    
    ${props => props.fullWidth && `
        width: 100%;
    `}

    ${props => props.color === 'primary' && `
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

    ${props => props.color === 'secondary' && `
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

    ${props => props.color === 'tertiary' && `
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

    ${props => props.size === 'large' && `
        font-size : 20px;
        line-height : 30px;
        padding: ${!props.hasText
            ? (props.pill ? '9px 1px' : '9px 3px')
            : '8px 16px'};
        svg {
            ${!props.hasText && 'margin-left : 8px;'}
            height: 28px;
            width: 28px;
            margin-right: 8px;
        }
    `}

    ${props => props.size === 'small' && `
        font-size : 14px;
        line-height : 21px;
        padding : 4px 8px;
        padding: ${!props.hasText
            ? (props.pill ? '5.5px 1px' : '5.5px 3px')
            : '4px 8px'};
        svg {
            ${!props.hasText && 'margin-left : 5px;'}
            height: 18px;
            width: 18px;
            margin-right: 4px;
        }
    `}

    ${props => props.outlined && props.color === 'primary' && `
        color: #01579b;
        border-color: #01579b;
        background-color: transparent;
        
        svg {
            fill: #01579b;
        }

        &:hover {
            background-color : #01579b;
            border-color : #01579b;
            color: #fff;

            svg {
                fill: #fff;
            }
        }

        &:active {
            background-color : #1565c0;
            border-color : #1565c0;
            color: #fff;

            svg {
                fill: #fff;
            }
        }

        &:disabled {
            color: #0277bd;
            border-color: #0277bd;
            background-color : transparent;

            svg {
                fill: #0277bd;
            }
        }
    `}

    ${props => props.outlined && props.color === 'secondary' && `
        color: #33691e;
        border-color: #33691e;
        background-color: transparent;

        svg {
            fill: #33691e;
        }

        &:hover {
            background-color : #33691e;
            border-color : #33691e;
            color: #fff;

            svg {
                fill: #fff;
            }
        }

        &:active {
            background-color : #2e7d32;
            border-color : #2e7d32;
            color: #fff;

            svg {
                fill: #fff;
            }
        }

        &:disabled {
            color: #558b2f;
            border-color: #558b2f;
            background-color : transparent;

            svg {
                fill: #558b2f;
            }
        }
    `}

    ${props => props.outlined && props.color === 'tertiary' && `
        color: #ff6f00;
        border-color: #ff6f00;
        background-color: transparent;

        svg {
            fill: #ff6f00;
        }

        &:hover {
            background-color : #ff6f00;
            border-color : #ff6f00;
            color: #fff;

            svg {
                fill: #fff;
            }
        }

        &:active {
            background-color : #ef6c00;
            border-color : #ef6c00;
            color: #fff;

            svg {
                fill: #fff;
            }
        }

        &:disabled {
            color: #ff8f00;
            border-color: #ff8f00;
            background-color : transparent;

            svg {
                fill: #ff8f00;
            }
        }
    `}
`

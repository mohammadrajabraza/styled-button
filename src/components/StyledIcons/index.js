import styled from 'styled-components'
import { ReactComponent as Search } from '../../assets/icons/searchIcon.svg'

export const SearchIcon = styled(Search)`
    fill: #fff;
    height: 22px;
    width: 22px;
    margin-right: 4px;

    ${props => props.large && `
        height: 28px;
        width: 28px;
        margin-right: 8px;
    `}
`

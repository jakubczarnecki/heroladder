import styled from "styled-components/native"
import { Tile } from "../../../components/Layout"
import theme from "../../../styles/Theme"

export const HelloWrapper = styled(Tile)`
    width: 90%;
    padding: 20px;
    background-color: ${theme.colors.white};
    flex-direction: row;
    margin: 5px;
`

export const TextWrapper = styled.View`
    flex-grow: 1;
    width: 60%;
`

export const AvatarWrapper = styled.View`
    align-items: center;
    justify-content: flex-start;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 7px;
`

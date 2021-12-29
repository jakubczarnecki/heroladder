import styled from "styled-components/native"
import { GradientBackground, Tile, TitleSmall } from "../../components/Layout"
import { TextInput } from "../../components/Form"

export const LoginWrapper = styled(GradientBackground)`
    flex: 1;
    align-items: center;
`

export const StyledTile = styled(Tile)`
    /* height: 65%; */
    margin-top: 13%;
    width: 90%;
    padding: 3%;
`

export const ButtonWrapper = styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: 100px;
`

export const LoginTitle = styled(TitleSmall)`
    padding: 15px;
    padding-left: 10px;
`

export const LoginInput = styled(TextInput)`
    margin: 15px;
`

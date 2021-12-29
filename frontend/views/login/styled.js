import styled from "styled-components/native"
import { GradientBackground, Tile, TitleSmall } from "../../components/Layout"
import { TextInput } from "../../components/Form"

export const LoginWrapper = styled(GradientBackground)`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const StyledTile = styled(Tile)`
    /* height: 65%; */
    margin-top: 13%;
    width: 90%;
    padding: 20px;
`

export const ButtonWrapper = styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: 50px;
`

export const LoginTitle = styled(TitleSmall)`
    margin-top: 15px;
    margin-bottom: 25px;
    margin-left: 3px;
`

export const LoginInput = styled(TextInput)`
    margin-top: 10px;
    margin-bottom: 10px;
`

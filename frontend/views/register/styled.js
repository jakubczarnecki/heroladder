import styled from "styled-components/native"
import {
    GradientBackground,
    LayoutWrapperScroll,
    Tile,
    TitleSmall,
} from "../../components/Layout"
import { TextInput, Button } from "../../components/Form"

export const LoginWrapper = styled(GradientBackground)`
    flex: 1;
`

export const LoginWrapperScroll = styled(LayoutWrapperScroll).attrs(() => ({
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
}))``

export const LogoWrapper = styled.View`
    justify-content: center;
    align-items: center;
    padding: 25px;
    flex-grow: 1;
`

export const StyledTile = styled(Tile)`
    /* height: 65%; */
    margin: 10px;
    margin-bottom: 20px;
    width: 90%;
    padding: 20px;
`

export const ButtonWrapper = styled.View`
    flex-direction: row;
    align-self: center;
    margin-top: 20px;
`

export const LoginTitle = styled(TitleSmall)`
    margin-top: 15px;
    margin-bottom: 20px;
    margin-left: 3px;
`

export const FormInput = styled(TextInput)`
    margin-top: 8px;
    margin-bottom: 8px;
`

export const LoginButton = styled(Button)`
    margin: 10px;
`

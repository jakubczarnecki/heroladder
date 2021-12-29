import styled from "styled-components/native"
import {
    GradientBackground,
    LayoutWrapperScroll,
    Tile,
    TitleSmall,
} from "../../components/Layout"
import { TextInput } from "../../components/Form"

export const LoginWrapper = styled(GradientBackground)`
    flex: 1;
`

export const LoginWrapperScroll = styled(LayoutWrapperScroll).attrs(() => ({
    contentContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
}))`
    flex: 1;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const LogoWrapper = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;
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
    margin-top: 20px;
`

export const LoginTitle = styled(TitleSmall)`
    margin-top: 15px;
    margin-bottom: 20px;
    margin-left: 3px;
`

export const LoginInput = styled(TextInput)`
    margin-top: 10px;
    margin-bottom: 10px;
`

export const PasswordInput = styled(TextInput)`
    margin-top: 10px;
    margin-bottom: 10px;
`

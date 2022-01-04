import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { FontAwesome5 } from "@expo/vector-icons"
import { ParagraphSmall } from "../../Layout"

export const Input = styled.TextInput`
    background-color: ${theme.colors.grayLight};

    color: ${(props) => {
        return props.error ? theme.colors.accentLight : theme.colors.dark
    }};

    border-bottom-color: ${(props) => {
        return props.error ? theme.colors.accentLight : theme.colors.gray
    }};
    border-bottom-width: 2.5px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    text-align-vertical: top;
    max-height: 120px;

    font-size: 18px;
    padding: 8px;
    padding-left: 14px;
    padding-right: ${(props) => {
        return props.password ? "55px" : "14px"
    }};
`

export const InputWrapper = styled.View`
    position: relative;
`

export const EyeIconWrapper = styled.Pressable`
    position: absolute;
    right: 30px;
    top: 26px;
`

export const EyeIcon = styled(FontAwesome5).attrs(() => ({
    size: 24,
    color: theme.colors.dark,
}))``

export const ErrorText = styled(ParagraphSmall)`
    color: ${theme.colors.accent};
`

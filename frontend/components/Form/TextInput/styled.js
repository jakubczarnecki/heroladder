import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { FontAwesome5 } from "@expo/vector-icons"

export const Input = styled.TextInput`
    background-color: ${theme.colors.grayLight};

    border-bottom-color: ${theme.colors.gray};
    border-bottom-width: 2.5px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    font-size: 18px;
    color: ${theme.colors.dark};
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
    top: 10px;
`

export const EyeIcon = styled(FontAwesome5).attrs(() => ({
    size: 24,
    color: theme.colors.dark,
}))``

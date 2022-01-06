import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { FontAwesome5 } from "@expo/vector-icons"
import { Pressable } from "../../Layout"

export const ButtonWrapper = styled.View`
    background-color: ${(props) => {
        return props.type === "contained" ? props.color : "transparent"
    }};
    min-width: ${(props) => {
        return props.size === "wide" ? "150px" : "0"
    }};
    position: relative;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-width: ${(props) => {
        return props.type === "outlined" ? "2px" : "0px"
    }};
    border-color: ${(props) => {
        return props.type === "outlined" ? props.color : "transparent"
    }};
`

export const ButtonContent = styled.View`
    padding: ${(props) => {
        return props.size === "thin" ? "8px" : "14px"
    }};
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => {
        return props.type === "contained" ? theme.colors.white : props.color
    }};
`

export const ButtonIcon = styled(FontAwesome5).attrs(() => ({
    size: 19,
}))`
    padding-right: 8px;
    color: ${(props) => {
        return props.type === "contained" ? theme.colors.white : props.color
    }};
`

export const PressableOverlay = styled(Pressable).attrs(() => ({
    pressStyle: {
        backgroundColor: "#2927231d",
    },
}))`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border-radius: 10px;
`

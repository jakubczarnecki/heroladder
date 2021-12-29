import styled from "styled-components/native"
import { Pressable } from "../../Layout"
import { FontAwesome5 } from "@expo/vector-icons"

export const CircleButtonWrapper = styled.View`
    background-color: ${(props) => {
        return props.color
    }};

    shadow-color: #000;
    shadow-opacity: 0.75;
    shadow-radius: 3px;
    shadow-offset: 0px 6px;
    elevation: 3;

    align-self: flex-start;
    width: 65px;
    height: 65px;
    border-radius: 50px;
    margin: 10px;

    justify-content: center;
    align-items: center;
`

export const ButtonIcon = styled(FontAwesome5).attrs(() => ({
    size: 35,
    color: "white",
}))``

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
    border-radius: 50px;
`

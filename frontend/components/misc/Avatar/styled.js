import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Pressable } from "../../Layout"

export const AvatarWrapper = styled.View`
    border-radius: 500px;
    overflow: hidden;

    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3px;
    shadow-offset: 0px 2px;
    elevation: 3;
`

export const RoundedPressable = styled(Pressable)``

export const AvatarImg = styled.ImageBackground.attrs((props) => ({
    resizeMode: "cover",
    source: props.img,
    borderRadius: 500,
}))`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;

    border-width: 3px;
    border-color: ${theme.colors.white};
    border-radius: 500px;
`

import styled from "styled-components/native"
import { Tile, DetailText, LogoImg, Paragraph } from "../../components/Layout"
import { FontAwesome5 } from "@expo/vector-icons"
import theme from "frontend/styles/Theme.js"

export const AboutTile = styled(Tile)`
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    /* align-items: center; */
    width: 90%;
`
export const AboutWrapper = styled.View`
    align-items: center;
    padding-top: 10px;
    position: relative;
    flex: 1;
`
export const AboutIcon = styled(FontAwesome5).attrs(() => ({
    size: 40,
    color: theme.colors.primary,
}))`
    margin-right: 15px;
`

export const AboutHeader = styled.View`
    flex-direction: row;
    align-self: center;
    align-items: center;
    margin-bottom: 15px;
`

export const AboutDetailText = styled(DetailText)`
    position: absolute;
    bottom: 15px;
`

export const AboutText = styled(Paragraph)`
    margin-bottom: 10px;
`

export const AboutTextLastLine = styled(Paragraph)`
    margin-bottom: 0px;
`

export const AboutLogo = styled(LogoImg)`
    position: absolute;
    bottom: 40px;
`

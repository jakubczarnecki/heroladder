import styled from "styled-components/native"
import { Tile, DetailText } from "../../components/Layout"
import { FontAwesome5 } from "@expo/vector-icons"
import theme from "frontend/styles/Theme.js"

export const AboutTile = styled(Tile)`
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    align-items: center;
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
    align-items: center;
    margin-bottom: 15px;
`

export const AboutDetailText = styled(DetailText)`
    position: absolute;
    bottom: 12px;
`

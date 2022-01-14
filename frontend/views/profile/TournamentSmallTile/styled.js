import styled from "styled-components/native"
import { Pressable, Tile } from "../../../components/Layout"
import { FontAwesome5 } from "@expo/vector-icons"
import theme from "../../../styles/Theme"

export const TournamentPressable = styled(Pressable)`
    padding: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const TournamentWrapper = styled(Tile)`
    margin: 7px;
    margin-right: 10px;
    height: 150px;
    width: 120px;
`

export const TournamentIcon = styled(FontAwesome5).attrs(() => ({
    color: theme.colors.primaryDark,
    size: 45,
}))`
    margin-bottom: 15px;
`

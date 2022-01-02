import styled from "styled-components/native"
import { Tile } from "../../Layout"
import { FontAwesome5 } from "@expo/vector-icons"
import theme from "../../../styles/Theme"

export const TournamentWrapper = styled(Tile)`
    padding: 10px;
    align-items: center;
    justify-content: center;
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

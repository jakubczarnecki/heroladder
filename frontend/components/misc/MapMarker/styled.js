import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Tile } from "../../Layout"
import { FontAwesome5 } from "@expo/vector-icons"
import { Button } from "../../Form"

export const MarkerWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const MarkerIconWrapper = styled(Tile)`
    border-radius: 50px;
    align-self: flex-start;
    padding: 7px;
    margin: 10px;
`

export const MarkerIcon = styled(FontAwesome5).attrs(() => ({
    size: 30,
    color: theme.colors.primaryDarker,
}))``

export const ContentWrapper = styled(Tile)`
    padding: 5px;
    width: 250px;
`

export const ContentHeader = styled.View`
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    flex-direction: row;
    justify-content: space-between;
`

export const ContentDetails = styled.View`
    border-top-color: ${theme.colors.gray};
    border-top-width: 1px;

    padding: 15px;
`

export const Row = styled.View`
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
`

export const Column = styled.View`
    width: 50%;
`

export const ButtonsWrapper = styled.View`
    margin-top: 12px;
`

export const DetailsButton = styled(Button)`
    margin-top: 8px;
`

import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Tile } from "../../../components/Layout"
import { FontAwesome5 } from "@expo/vector-icons"
import { Button } from "../../../components/Form"
import { Marker, Callout } from "react-native-maps"

export const CustomMarker = styled(Marker).attrs(() => ({
    anchor: { x: 0.5, y: 0 },
}))`
    flex-direction: row;
    align-items: center;
`

export const MarkerWrapper = styled(Callout).attrs(() => ({
    tooltip: true,
}))`
    /* position: relative; */
    /* overflow: visible; */

    justify-content: center;
    align-items: center;
`

export const MarkerIconWrapper = styled(Tile)`
    border-radius: 50px;
    width: 48px;
    height: 48px;
    margin-top: 5px;
    align-items: center;
    justify-content: center;

    border-color: ${(props) =>
        props.premium ? theme.colors.primary : theme.colors.gray};
    border-width: 2px;
`

export const MarkerIcon = styled(FontAwesome5).attrs(() => ({
    size: 30,
    color: theme.colors.primaryDarker,
}))``

export const ContentWrapper = styled(Tile)`
    padding: 5px;
    width: 250px;
    /* position: absolute; */
    /* left: 50px;
    top: 50px; */
`

export const ContentHeader = styled.View`
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    flex-direction: row;
    justify-content: space-between;
`

export const ContentDetails = styled.View`
    border-top-color: ${theme.colors.gray};
    border-top-width: 1px;

    padding: 15px;
    padding-bottom: 5px;
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

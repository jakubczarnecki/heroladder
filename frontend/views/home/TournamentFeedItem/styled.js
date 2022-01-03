import styled from "styled-components/native"
import {
    DetailText,
    Paragraph,
    ParagraphSmall,
    Tile,
} from "../../../components/Layout"
import theme from "../../../styles/Theme"
import { FontAwesome5 } from "@expo/vector-icons"
import { Button } from "../../../components/Form"
import MapView from "react-native-maps"

export const FeedWrapper = styled(Tile)`
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    margin: 12px;
    width: 90%;
`

export const FeedHeader = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
`

export const HeaderTextWrapper = styled.View`
    flex-grow: 1;
    width: 80%;
    justify-content: center;
    padding-left: 10px;
`

export const DateText = styled(DetailText)`
    align-self: flex-end;
    font-size: 11px;
`

export const ActionText = styled(Paragraph)`
    line-height: 14px;
    padding-bottom: 5px;
`

export const FeedContent = styled.View`
    flex-direction: row;
`

export const Description = styled.View`
    width: 50%;
    height: 235px;
`

export const DescriptionHeader = styled.View`
    width: 100%;
    background-color: ${theme.colors.grayLight};
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`

export const HeaderIcon = styled(FontAwesome5).attrs(() => ({
    color: theme.colors.primaryDarker,
    size: 35,
}))`
    padding: 10px;
    padding-left: 20px;
`

export const DescriptionItem = styled.View`
    padding: 6px;
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
`

export const ItemIcon = styled(FontAwesome5).attrs(() => ({
    color: theme.colors.primary,
    size: 24,
}))`
    margin-left: -5px;
    padding-right: 10px;
    width: 50px;
    text-align: center;
`

export const ItemText = styled(ParagraphSmall)`
    font-size: 12px;
`

export const RegisterButton = styled(Button)`
    width: 90%;
    align-self: center;
    margin-top: 10px;
`

export const MapWrapper = styled(MapView)`
    width: 50%;
    height: 100%;
    background-color: #7bf1a8;
`

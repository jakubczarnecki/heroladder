import styled from "styled-components/native"
import MapView, { Marker } from "react-native-maps"
import { Button, ErrorBox } from "../../components/Form"
import { Paragraph, ParagraphBold } from "../../components/Layout"
import theme from "../../styles/Theme"

export const MapPage = styled(MapView).attrs(({ width, height }) => ({
    width,
    height,
}))``

export const PositionMarker = styled(Marker).attrs(() => ({}))``

export const MapWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

export const LocationErrorBox = styled(ErrorBox)`
    width: 90%;
    margin: 5%;
    margin-top: 30px;
    margin-bottom: 10px;
`

export const LocationErrorButton = styled(Button)`
    align-self: flex-end;
    margin-right: 5%;
`

export const DataLoader = styled(Paragraph)`
    position: absolute;
    bottom: 20px;
    text-align: center;
    background-color: ${theme.colors.white};
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
`

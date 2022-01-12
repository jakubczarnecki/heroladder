import styled from "styled-components/native"
import MapView, { Marker } from "react-native-maps"
import { Button, ErrorBox } from "../../components/Form"

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

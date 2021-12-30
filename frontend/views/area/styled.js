import styled from "styled-components/native"
import MapView, { Marker } from "react-native-maps"

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

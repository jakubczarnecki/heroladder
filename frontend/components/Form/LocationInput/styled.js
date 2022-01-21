import styled from "styled-components/native"
import MapView from "react-native-maps"
import Loader from "../../misc/Loader"
import theme from "../../../styles/Theme"

export const LocationWrapper = styled(MapView)`
    flex: 1;
`

export const LoaderWrapper = styled.View`
    height: 250px;
    align-items: center;
    justify-content: center;
`

export const MapLoader = styled(Loader).attrs({
    size: 35,
    color: theme.colors.grayDark,
})``

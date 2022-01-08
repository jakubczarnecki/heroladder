import MapView from "react-native-maps"
import styled from "styled-components/native"
import { GradientWrapper, Tile, Title } from "../../components/Layout"
import theme from "../../styles/Theme"
import { CircleButton } from "../../components/Form"

export const TournamentWrapper = styled.View`
    align-items: center;
`

export const Section = styled(Tile)`
    width: 90%;
    align-self: center;
    margin: 25px;
`

export const SectionHeader = styled(GradientWrapper)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    flex-direction: row;
    justify-content: space-between;
`

export const SectionTitle = styled(Title)`
    color: ${theme.colors.white};
`

export const SectionContent = styled.View`
    padding: 20px;
`

export const Row = styled.View`
    flex-direction: row;
`

export const MapWrapper = styled(MapView)`
    width: 100%;
    height: ${(props) => props.height}px;
`

export const FixedButton = styled(CircleButton)`
    position: absolute;
    bottom: 10px;
    right: 10px;
`

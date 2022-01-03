import MapView from "react-native-maps"
import styled from "styled-components/native"
import { Button } from "../../components/Form"
import { GradientWrapper, Tile, Title } from "../../components/Layout"
import theme from "../../styles/Theme"

export const TournamentWrapper = styled.View`
    align-items: center;
`

export const Stretch = styled.View`
    flex: 1;
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
    flex-direction: row;
`

export const ContentColumn = styled.View`
    flex: 1;
`

export const MapWrapper = styled(MapView)`
    width: 100%;
    height: 250px;
`

export const Team = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;

    border-color: ${theme.colors.gray};
    border-bottom-width: 1px;
`

export const TeamSquad = styled.View`
    flex-direction: row;
`

export const RegisterButton = styled(Button)`
    align-self: flex-end;
    margin-top: 15px;
`

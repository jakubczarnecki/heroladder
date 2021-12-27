import styled from "styled-components/native"
import theme from "../../styles/Theme"
import { FontAwesome5 } from "@expo/vector-icons"

export const DrawerWrapper = styled.View`
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: ${theme.colors.grayLight};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const TileContent = styled.View`
    padding: 20px;
    width: 135px;
    height: 135px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TileCaption = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${theme.colors.dark};
`

export const TileIcon = styled(FontAwesome5).attrs({
    size: 55,
    color: theme.colors.primary,
})`
    padding: 10px;
`

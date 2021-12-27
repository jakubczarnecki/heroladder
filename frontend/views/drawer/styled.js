import styled from "styled-components/native"
import theme from "../../styles/Theme"
import Pressable from "../../components/Layout/Pressable"
import { FontAwesome5 } from "@expo/vector-icons"

export const DrawerWrapper = styled.View`
    padding: 10px;
    height: 100%;
    background-color: ${theme.colors.grayLight};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const TileContent = styled(Pressable).attrs(() => ({
    pressStyle: {
        borderRadius: 10,
        backgroundColor: theme.colors.grayLighter,
    },
}))`
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

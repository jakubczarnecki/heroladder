import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Pressable, DetailText, LogoImg } from "../../Layout"
import { FontAwesome5 } from "@expo/vector-icons"

export const DrawerWrapper = styled.View`
    padding: 10px;
    padding-top: 30px;
    flex: 1;
    background-color: ${theme.colors.grayLight};
`

export const TileContent = styled(Pressable)`
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

export const DrawerContent = styled.View`
    flex-grow: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const DrawerFooter = styled.View`
    justify-content: center;
    align-items: center;
`

export const MenuDetailText = styled(DetailText)`
    margin-bottom: 5px;
`

export const MenuLogo = styled(LogoImg)`
    margin-bottom: 8px;
`

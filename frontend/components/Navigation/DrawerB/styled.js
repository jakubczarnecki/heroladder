import styled from "styled-components/native"
import theme from "../../../styles/Theme"
import { Pressable, DetailText, LogoImg } from "../../Layout"
import { FontAwesome5 } from "@expo/vector-icons"
import defaultBackground from "../../../assets/img/defaultProfileBackground.jpg"
import axios from "axios"
import { LinearGradient } from "expo-linear-gradient"

export const GradientOverlay = styled(LinearGradient).attrs({
    colors: ["transparent", "#161515c6"],
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const BackgroundWrapper = styled.ImageBackground.attrs((props) => ({
    source: props.img
        ? { uri: axios.defaults.baseURL + props.img }
        : defaultBackground,
    resizeMode: "cover",
}))`
    height: 170px;
    width: 100%;
`

export const DrawerHeader = styled.View`
    justify-content: center;
    align-items: center;
    height: 170px;
    /* background-color: blue; */
`

export const DrawerWrapper = styled.View`
    flex: 1;
    background-color: ${theme.colors.grayLight};
`

export const OptionContent = styled(Pressable)`
    width: 300px;
    height: 55px;
    padding-left: 20px;
    margin-left: -20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const OptionCaption = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.dark};
`

export const UserCaption = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${theme.colors.white};
    /* position: absolute; */
`

export const IconWrapper = styled.View`
    width: 37px;
    height: 37px;
    margin-right: 20px;
    margin-left: 0px;
`

export const OptionWrapper = styled.View`
    padding-top: 10px;
`

export const OptionIcon = styled(FontAwesome5).attrs({
    size: 35,
    color: theme.colors.primary,
})`
    align-items: center;
    justify-content: center;
    align-self: center;
    /* background-color: blue; */
`

export const DrawerContent = styled.View`
    flex-grow: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
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

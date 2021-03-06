import styled from "styled-components/native"
import theme from "../../styles/Theme"
import axios from "axios"
import { LayoutWrapperScroll, TitleSmall } from "../../components/Layout"
import defaultBackground from "../../assets/img/defaultProfileBackground.jpg"
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesome5 } from "@expo/vector-icons"
import { CircleButton } from "../../components/Form"
import { Loader, RandomSentences } from "../../components/misc"

export const ProfileWrapperScroll = styled(LayoutWrapperScroll)`
    background-color: ${theme.colors.grayLight};
`

export const ProfileHeader = styled.View`
    align-items: center;
`

export const BackgroundWrapper = styled.ImageBackground.attrs((props) => ({
    source: props.img
        ? { uri: axios.defaults.baseURL + props.img }
        : defaultBackground,
    resizeMode: "cover",
}))`
    height: 250px;
    width: 100%;
`

export const SettingsIcon = styled(CircleButton).attrs(() => ({
    color: "white",
    iconColor: "dark",
    icon: "ellipsis-h",
    size: 0.75,
}))`
    position: absolute;
    right: 25px;
    top: 25px;
`

export const GradientOverlay = styled(LinearGradient).attrs({
    colors: ["transparent", "#161515c6"],
})`
    flex: 1;
`

export const AvatarWrapper = styled.View`
    position: relative;
    top: -120px;
    align-items: center;
`

export const UserSubtitle = styled(RandomSentences)`
    width: 300px;
    margin-top: 10px;
    margin-bottom: -35px;
    text-align: center;
`

export const ProfileContent = styled.View`
    margin: 5%;
    margin-top: -80px;
    padding: 10px;
`

export const SectionHeader = styled(TitleSmall)`
    color: ${theme.colors.primaryDark};
`

export const Section = styled.View`
    padding-top: 10px;
    padding-bottom: 20px;
`

export const TournamentHistory = styled.ScrollView`
    padding-top: 5px;
    padding-bottom: 5px;
`

export const ProfileLoader = styled(Loader).attrs({
    size: 35,
    color: theme.colors.grayDark,
})`
    margin-top: 30px;
`

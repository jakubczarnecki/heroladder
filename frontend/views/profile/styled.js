import styled from "styled-components/native"
import theme from "../../styles/Theme"
import {
    LayoutWrapperScroll,
    Subtitle,
    TitleSmall,
} from "../../components/Layout"
import defaultBackground from "../../assets/img/defaultProfileBackground.jpg"
import { LinearGradient } from "expo-linear-gradient"

export const ProfileWrapperScroll = styled(LayoutWrapperScroll)`
    background-color: ${theme.colors.grayLight};
`

export const ProfileHeader = styled.View`
    align-items: center;
`

export const BackgroundWrapper = styled.ImageBackground.attrs((props) => ({
    source: props.profileBackground
        ? props.profileBackground
        : defaultBackground,
    resizeMode: "cover",
}))`
    height: 250px;
    width: 100%;
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

export const UserSubtitle = styled(Subtitle)`
    width: 300px;
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

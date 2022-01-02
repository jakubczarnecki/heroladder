import React from "react"
import PropTypes from "prop-types"
import {
    AvatarWrapper,
    BackgroundWrapper,
    GradientOverlay,
    ProfileContent,
    ProfileDetails,
    ProfileHeader,
    ProfileWrapperScroll,
    Section,
    SectionHeader,
    TournamentHistory,
    UserSubtitle,
} from "./styled"
import { FadeInView } from "../../components/Transitions"
import bg2 from "../../assets/img/bg2.jpg"
import { Avatar } from "../../components/misc"
import {
    DetailText,
    Paragraph,
    Subtitle,
    Tile,
    Title,
} from "../../components/Layout"
import { TournamentSmallTile } from "../../components/Tournaments"

const profileView = ({ navigation }) => {
    return (
        <FadeInView>
            <ProfileWrapperScroll>
                <ProfileHeader>
                    <BackgroundWrapper profileBackground={bg2}>
                        <GradientOverlay />
                    </BackgroundWrapper>
                    <AvatarWrapper>
                        <Avatar
                            img={bg2}
                            press={() => {
                                console.log(2)
                            }}
                            size={180}
                        />
                        <Title>Jakub Czarnecki</Title>
                        <UserSubtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis minus
                        </UserSubtitle>
                    </AvatarWrapper>
                </ProfileHeader>

                <ProfileContent>
                    <Section>
                        <SectionHeader>Achievements</SectionHeader>
                        <Paragraph>Work in progress</Paragraph>
                    </Section>
                    <Section>
                        <SectionHeader>Tournaments History</SectionHeader>
                        <TournamentHistory horizontal={true}>
                            <TournamentSmallTile
                                icon="volleyball-ball"
                                title="Siatkówka"
                                date="24.09.2021"
                            />
                            <TournamentSmallTile
                                icon="volleyball-ball"
                                title="Siatkówka"
                                date="24.09.2021"
                            />
                            <TournamentSmallTile
                                icon="volleyball-ball"
                                title="Siatkówka"
                                date="24.09.2021"
                            />
                            <TournamentSmallTile
                                icon="volleyball-ball"
                                title="Siatkówka"
                                date="24.09.2021"
                            />
                        </TournamentHistory>
                    </Section>
                </ProfileContent>
            </ProfileWrapperScroll>
        </FadeInView>
    )
}

profileView.propTypes = {
    navigation: PropTypes.object,
}

export default profileView

import React, { useState } from "react"
import PropTypes from "prop-types"
import {
    AvatarWrapper,
    BackgroundWrapper,
    GradientOverlay,
    ProfileContent,
    ProfileHeader,
    ProfileWrapperScroll,
    Section,
    SectionHeader,
    SettingsIcon,
    TournamentHistory,
    UserSubtitle,
} from "./styled"
import { FadeInView } from "../../components/Transitions"
import bg2 from "../../assets/img/bg2.jpg"
import { Avatar } from "../../components/misc"
import { Paragraph, Title } from "../../components/Layout"
import TournamentSmallTile from "./TournamentSmallTile"
import SettingsModal from "./SettingsModal"

const profileView = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <FadeInView>
            <ProfileWrapperScroll>
                <ProfileHeader>
                    <BackgroundWrapper>
                        <GradientOverlay />
                        <SettingsIcon onPress={() => setModalOpen(true)} />
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
            <SettingsModal
                isOpen={modalOpen}
                onCancel={() => setModalOpen(false)}
                onSubmit={() => setModalOpen(false)}
            />
        </FadeInView>
    )
}

profileView.propTypes = {
    navigation: PropTypes.object,
}

export default profileView

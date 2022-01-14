import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import {
    AvatarWrapper,
    BackgroundWrapper,
    GradientOverlay,
    ProfileContent,
    ProfileHeader,
    ProfileLoader,
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
import { Title } from "../../components/Layout"
import TournamentSmallTile from "./TournamentSmallTile"
import SettingsModal from "./SettingsModal"
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "../../redux/actions/dataActions"
import Disciplines from "../../util/Disciplines"
import moment from "moment"

const profileView = ({ route, navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const dispatch = useDispatch()
    const loggedUserID = useSelector((state) => state.user.id)
    const userData = useSelector((state) => state.data.user)
    const loading = useSelector((state) => state.data.loading)

    useEffect(() => {
        dispatch(getUserData(route.params.userID))
    }, [])

    userData && console.log(userData.organizedTournaments)

    if (loading) {
        return (
            <FadeInView>
                <ProfileWrapperScroll>
                    <ProfileLoader />
                </ProfileWrapperScroll>
            </FadeInView>
        )
    }

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
                        <Title>{userData.username}</Title>
                        <UserSubtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis minus
                        </UserSubtitle>
                    </AvatarWrapper>
                </ProfileHeader>

                <ProfileContent>
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
                    <Section>
                        <SectionHeader>Created tournaments</SectionHeader>
                        {userData.organizedTournaments ? (
                            userData.organizedTournaments.map(
                                (tournament, index) => (
                                    <TournamentSmallTile
                                        key={index}
                                        icon={
                                            Disciplines.find(
                                                (d) =>
                                                    d.value ===
                                                    tournament.discipline
                                            ).icon
                                        }
                                        title={tournament.discipline}
                                        date={moment(tournament.date).format(
                                            "DD/MM/YYYY"
                                        )}
                                        onPress={() =>
                                            navigation.navigate("Tournament", {
                                                tournamentID: tournament._id,
                                            })
                                        }
                                    />
                                )
                            )
                        ) : (
                            <Title>Has not created any tournaments yet</Title>
                        )}
                        <TournamentHistory
                            horizontal={true}
                        ></TournamentHistory>
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

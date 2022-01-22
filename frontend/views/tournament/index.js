import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useWindowDimensions } from "react-native"
import { FadeInView } from "../../components/Transitions"
import { LayoutWrapperScroll } from "../../components/Layout"
import { FixedButton, MapWrapper } from "./styled"
import { Loader } from "../../components/misc"
import { Marker } from "react-native-maps"
import Ladder from "./Ladder"
import Details from "./Details"
import { TabNav } from "../../components/Navigation"
import EditTournamentModal from "./EditTournamentModal"
import { useDispatch, useSelector } from "react-redux"
import { setTournament } from "../../redux/actions/dataActions"

const tournamentView = ({ route, navigation }) => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const { height } = useWindowDimensions()

    const dispatch = useDispatch()
    const tournament = useSelector((state) => state.data.tournament)
    const loggedUserID = useSelector((state) => state.user.id)
    const { tournamentID } = route.params

    useEffect(() => {
        dispatch(setTournament(tournamentID))
    }, [tournamentID])

    const navPages = [
        {
            name: "Details",
            content: <Details tournament={tournament} />,
        },
        {
            name: "Location",
            content: tournament.location ? (
                <MapWrapper
                    height={height - 160}
                    initialRegion={{
                        latitude: tournament.location.latitude,
                        longitude: tournament.location.longitude,
                        latitudeDelta: 0.013,
                        longitudeDelta: 0.013,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: tournament.location.latitude,
                            longitude: tournament.location.longitude,
                        }}
                    />
                </MapWrapper>
            ) : (
                <Loader size={20} color="red" />
            ),
        },
        {
            name: "Ladder",
            content: <Ladder tournament={tournament} />,
        },
    ]

    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <TabNav pages={navPages} />
            </LayoutWrapperScroll>
            {loggedUserID === tournament.organizerId && (
                <FixedButton
                    icon="cog"
                    onPress={() => setEditModalOpen(true)}
                />
            )}

            <EditTournamentModal
                isOpen={editModalOpen}
                onCancel={() => setEditModalOpen(false)}
                onSubmit={() => setEditModalOpen(false)}
                tournament={tournament}
            />
        </FadeInView>
    )
}

tournamentView.propTypes = {
    navigation: PropTypes.object,
    route: PropTypes.object,
}

export default tournamentView

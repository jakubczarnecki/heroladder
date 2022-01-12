import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useWindowDimensions } from "react-native"
import { FadeInView } from "../../components/Transitions"
import { LayoutWrapperScroll } from "../../components/Layout"
import { FixedButton, MapWrapper } from "./styled"
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
            content: (
                <MapWrapper
                    height={height}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                    />
                </MapWrapper>
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
            <FixedButton icon="cog" onPress={() => setEditModalOpen(true)} />

            <EditTournamentModal
                isOpen={editModalOpen}
                onCancel={() => setEditModalOpen(false)}
                onSubmit={() => setEditModalOpen(false)}
            />
        </FadeInView>
    )
}

tournamentView.propTypes = {
    navigation: PropTypes.object,
    route: PropTypes.object,
}

export default tournamentView

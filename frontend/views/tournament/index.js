import React, { useState } from "react"
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

const tournamentView = ({ navigation }) => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const { height } = useWindowDimensions()

    const navPages = [
        {
            name: "Details",
            content: <Details />,
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
            content: <Ladder />,
        },
    ]

    return (
        <FadeInView>
            <LayoutWrapperScroll>
                <TabNav pages={navPages} />
            </LayoutWrapperScroll>
            <FixedButton icon="cog" />

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
}

export default tournamentView

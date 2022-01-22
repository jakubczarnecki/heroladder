import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import useCurrentLocation from "../../hooks/useCurrentLocation"
import { FadeInView } from "../../components/Transitions"
import { useWindowDimensions } from "react-native"
import {
    DataLoader,
    LocationErrorBox,
    LocationErrorButton,
    MapPage,
    MapWrapper,
} from "./styled"
import { PROVIDER_GOOGLE } from "react-native-maps"
import MapMarker from "./MapMarker"
import { useDispatch, useSelector } from "react-redux"
import { setAreaTournaments } from "../../redux/actions/dataActions"
import { getDisciplineIcon } from "../../util/Disciplines"

const areaView = ({ navigation }) => {
    const { height, width } = useWindowDimensions()
    const [currentLocation, errorMsg, loacationLoading] = useCurrentLocation()
    const [viewLocation, setViewLocation] = useState(null)
    const [markerScale, setMarkerScale] = useState(1)

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const areaTournaments = useSelector((state) => state.data.areaTournaments)

    useEffect(() => {
        let timeout
        setLoading(true)
        if (viewLocation) {
            timeout = setTimeout(() => {
                if (viewLocation.radius < 0.3) {
                    dispatch(setAreaTournaments(viewLocation))
                }
                setLoading(false)
            }, 2000)
        } else {
            setLoading(false)
        }

        return () => clearTimeout(timeout)
    }, [viewLocation])

    useEffect(() => {
        if (!loacationLoading) {
            dispatch(
                setAreaTournaments({
                    ...currentLocation,
                    radius: 1,
                })
            )
        }
    }, [loacationLoading])

    return (
        <FadeInView>
            {errorMsg && (
                <>
                    <LocationErrorBox staticErrorText={errorMsg} />
                    <LocationErrorButton
                        title="Ask for permissions"
                        type="contained"
                        color="accentLight"
                        onPress={() => console.log("a")}
                    />
                </>
            )}
            <MapWrapper>
                {!errorMsg && currentLocation && (
                    <MapPage
                        height={height - 90}
                        width={width}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                            latitudeDelta: 0.009,
                            longitudeDelta: 0.009,
                        }}
                        onRegionChangeComplete={({
                            latitude,
                            longitude,
                            longitudeDelta,
                            latitudeDelta,
                        }) => {
                            let scale =
                                Math.atan(
                                    1 / (6 * (longitudeDelta + latitudeDelta))
                                ) * 0.62
                            setMarkerScale(scale)
                            setViewLocation({
                                latitude,
                                longitude,
                                radius: latitudeDelta * 10,
                            })
                        }}
                    >
                        {areaTournaments &&
                            areaTournaments.map((tournament, index) => (
                                <MapMarker
                                    key={index}
                                    icon={getDisciplineIcon(
                                        tournament.discipline
                                    )}
                                    title={tournament.tournamentName}
                                    date={tournament.date}
                                    teamSize={tournament.teamSize}
                                    teamCount={tournament.bracketSize}
                                    teamsAvailible={tournament.bracketTaken}
                                    markerScale={markerScale}
                                    coordinate={{
                                        latitude: tournament.location.latitude,
                                        longitude:
                                            tournament.location.longitude,
                                    }}
                                />
                            ))}
                    </MapPage>
                )}
                {loading && <DataLoader>Loading tournaments...</DataLoader>}
            </MapWrapper>
        </FadeInView>
    )
}

areaView.propTypes = {
    navigation: PropTypes.object,
}

export default areaView

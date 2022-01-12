import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import * as Location from "expo-location"
import { FadeInView } from "../../components/Transitions"
import { useWindowDimensions } from "react-native"
import {
    LocationErrorBox,
    LocationErrorButton,
    MapPage,
    MapWrapper,
} from "./styled"
import { PROVIDER_GOOGLE } from "react-native-maps"
import MapMarker from "./MapMarker"
import { Paragraph } from "../../components/Layout"

const areaView = ({ navigation }) => {
    const { height, width } = useWindowDimensions()
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const [markerScale, setMarkerScale] = useState(1)

    const _getLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied.")
            return
        }

        let loc = await Location.getCurrentPositionAsync()
        setLocation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
        })
    }

    useEffect(() => {
        _getLocationAsync()
    }, [])

    return (
        <FadeInView>
            {errorMsg && (
                <>
                    <LocationErrorBox staticErrorText={errorMsg} />
                    <LocationErrorButton
                        title="Ask for permissions"
                        type="contained"
                        color="accentLight"
                        onPress={() => _getLocationAsync()}
                    />
                </>
            )}
            <MapWrapper>
                {!errorMsg && location && (
                    <MapPage
                        height={height}
                        width={width}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.03,
                            longitudeDelta: 0.03,
                        }}
                        onRegionChangeComplete={({
                            longitudeDelta,
                            latitudeDelta,
                        }) => {
                            let scale =
                                Math.atan(
                                    1 / (6 * (longitudeDelta + latitudeDelta))
                                ) * 0.62
                            setMarkerScale(scale)
                        }}
                    >
                        <MapMarker
                            icon="volleyball-ball"
                            title="Title"
                            date="23.01.2022"
                            teamSize={4}
                            teamCount={2}
                            teamsAvailible={1}
                            markerScale={markerScale}
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                        />
                    </MapPage>
                )}
            </MapWrapper>
        </FadeInView>
    )
}

areaView.propTypes = {
    navigation: PropTypes.object,
}

export default areaView

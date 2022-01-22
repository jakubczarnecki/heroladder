import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { LoaderWrapper, LocationWrapper, MapLoader } from "./styled"
import * as Location from "expo-location"
import { Marker } from "react-native-maps"

const LocationInput = ({ value, onChange }) => {
    const [location, setLocation] = useState(value)
    // const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        const _getLocationAsync = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                // setErrorMsg("Permission to access location was denied")
                return
            }

            let loc = await Location.getCurrentPositionAsync()
            setLocation({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
            })
        }

        _getLocationAsync()
    }, [])

    return location ? (
        <LocationWrapper
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
            }}
            onPress={(e) => {
                onChange(e.nativeEvent.coordinate)
                setLocation(e.nativeEvent.coordinate)
            }}
            height={250}
        >
            {value && <Marker coordinate={value} />}
        </LocationWrapper>
    ) : (
        <LoaderWrapper>
            <MapLoader />
        </LoaderWrapper>
    )
}

LocationInput.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
}

export default LocationInput

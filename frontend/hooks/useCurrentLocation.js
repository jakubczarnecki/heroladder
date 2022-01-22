import React, { useState, useEffect } from "react"
import * as Location from "expo-location"

const useCurrentLocation = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        const getLocation = async () => {
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

        getLocation()
    }, [])
    return [location, errorMsg]
}

export default useCurrentLocation

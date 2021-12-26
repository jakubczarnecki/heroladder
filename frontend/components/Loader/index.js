import React, { useRef } from "react"
import PropTypes from "prop-types"
import { Fontisto } from "@expo/vector-icons"

import { Animated, Easing } from "react-native"

const Loader = ({ size, color }) => {
    const animation = useRef(new Animated.Value(0)).current

    Animated.loop(
        Animated.timing(animation, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start()

    const spin = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    })

    return (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Fontisto name="spinner" size={size} color={color} />
        </Animated.View>
    )
}

Loader.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
}

export default Loader

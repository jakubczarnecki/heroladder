import React from "react"
import PropTypes from "prop-types"
import { Pressable as RNPressable } from "react-native"
import theme from "../../styles/Theme"

const Pressable = ({ style, ...props }) => (
    <RNPressable
        android_ripple={{
            color: "#d3cbc799",
            foreground: true,
        }}
        style={style}
        {...props}
    />
)

Pressable.propTypes = {
    style: PropTypes.array,
}

export default Pressable

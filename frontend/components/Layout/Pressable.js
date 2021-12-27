import React from "react"
import PropTypes from "prop-types"
import { Pressable as RNPressable } from "react-native"

const mergePressableStyles = (style, pressStyle) => {
    if (!pressStyle) {
        return style
    }

    if (!style) {
        return ({ pressed }) => (pressed ? pressStyle : undefined)
    }

    return ({ pressed }) => (pressed ? [style, pressStyle] : style)
}

const Pressable = ({ style, pressStyle, ...props }) => (
    <RNPressable style={mergePressableStyles(style, pressStyle)} {...props} />
)

Pressable.propTypes = {
    style: PropTypes.array,
    pressStyle: PropTypes.object,
}

export default Pressable

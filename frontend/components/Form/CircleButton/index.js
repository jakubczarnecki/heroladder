import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { ButtonIcon, CircleButtonWrapper, PressableOverlay } from "./styled"
import theme from "../../../styles/Theme"

const CircleButton = ({ style, icon, color, iconColor, size, onPress }) => {
    const themeColor = color ? theme.colors[color] : theme.colors.primary
    const themeColorIcon = iconColor
        ? theme.colors[iconColor]
        : theme.colors.white

    return (
        <View
            style={[
                style,
                {
                    borderRadius: 700,
                    overflow: "hidden",
                },
            ]}
        >
            <CircleButtonWrapper
                color={themeColor}
                size={size}
                onPress={onPress}
            >
                <ButtonIcon name={icon} size={size} color={themeColorIcon} />
            </CircleButtonWrapper>
        </View>
    )
}

CircleButton.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    iconColor: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.array,
}

export default CircleButton

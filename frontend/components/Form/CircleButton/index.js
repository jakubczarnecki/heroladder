import React from "react"
import PropTypes from "prop-types"
import { ButtonIcon, CircleButtonWrapper, PressableOverlay } from "./styled"
import theme from "../../../styles/Theme"

const CircleButton = ({ icon, color, onPress }) => {
    const themeColor = color ? theme.colors[color] : theme.colors.primary

    return (
        <CircleButtonWrapper color={themeColor}>
            <ButtonIcon name={icon} />
            <PressableOverlay onPress={onPress} />
        </CircleButtonWrapper>
    )
}

CircleButton.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
}

export default CircleButton

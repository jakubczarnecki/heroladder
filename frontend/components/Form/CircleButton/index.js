import React from "react"
import PropTypes from "prop-types"
import { ButtonIcon, CircleButtonWrapper } from "./styled"
import theme from "../../../styles/Theme"

const CircleButton = ({ icon, color, onPress }) => {
    const themeColor = color ? theme.colors[color] : theme.colors.primary

    return (
        <CircleButtonWrapper color={themeColor} onPress={onPress}>
            <ButtonIcon name={icon} />
        </CircleButtonWrapper>
    )
}

CircleButton.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
}

export default CircleButton

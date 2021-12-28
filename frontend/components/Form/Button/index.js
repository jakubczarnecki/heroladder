import React from "react"
import PropTypes from "prop-types"
import { ButtonIcon, ButtonText, ButtonWrapper } from "./styled"
import theme from "../../../styles/Theme"

const Button = ({ title, icon, type, color, disabled, onPress, size }) => {
    let themeColor = color ? theme.colors[color] : theme.colors.primary

    if (disabled) {
        themeColor = theme.colors.grayDark
        onPress = null
    }

    return (
        <ButtonWrapper
            type={type}
            color={themeColor}
            onPress={onPress}
            size={size}
        >
            {icon && <ButtonIcon name="eye" type={type} color={themeColor} />}
            <ButtonText type={type} color={themeColor}>
                {title}
            </ButtonText>
        </ButtonWrapper>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(["normal", "wide"]),
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.oneOf(["text", "contained", "outlined"]),
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
}

export default Button

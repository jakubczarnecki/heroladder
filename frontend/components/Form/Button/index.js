import React from "react"
import PropTypes from "prop-types"
import { ButtonIcon, ButtonText, ButtonWrapper } from "./styled"
import theme from "../../../styles/Theme"

const Button = ({ title, icon, type, color, disabled, onPress }) => {
    let themeColor = color ? theme.colors[color] : theme.colors.primary

    if (disabled) {
        themeColor = theme.colors.grayDark
        onPress = null
    }

    return (
        <ButtonWrapper type={type} color={themeColor} onPress={onPress}>
            {icon && <ButtonIcon name="eye" type={type} color={themeColor} />}
            <ButtonText type={type} color={themeColor}>
                {title}
            </ButtonText>
        </ButtonWrapper>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
}

export default Button

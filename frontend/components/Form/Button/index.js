import React from "react"
import PropTypes from "prop-types"
import {
    ButtonContent,
    ButtonIcon,
    ButtonText,
    ButtonWrapper,
    PressableOverlay,
} from "./styled"
import theme from "../../../styles/Theme"

const Button = ({
    style,
    title,
    icon,
    type,
    color,
    disabled,
    onPress,
    size,
}) => {
    let themeColor = color ? theme.colors[color] : theme.colors.primary

    if (disabled) {
        themeColor = theme.colors.grayDark
    }

    return (
        <ButtonWrapper type={type} color={themeColor} size={size} style={style}>
            <ButtonContent size={size}>
                {icon && (
                    <ButtonIcon name={icon} type={type} color={themeColor} />
                )}
                {title && (
                    <ButtonText type={type} color={themeColor}>
                        {title}
                    </ButtonText>
                )}
            </ButtonContent>

            {!disabled && <PressableOverlay onPress={onPress} />}
        </ButtonWrapper>
    )
}

Button.propTypes = {
    style: PropTypes.array,
    size: PropTypes.oneOf(["normal", "wide", "thin"]),
    title: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.oneOf(["text", "contained", "outlined"]),
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
}

export default Button

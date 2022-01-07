import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
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
        <View style={[style, { borderRadius: 10, overflow: "hidden" }]}>
            <ButtonWrapper
                type={type}
                color={themeColor}
                size={size}
                onPress={onPress}
            >
                <ButtonContent size={size}>
                    {icon && (
                        <ButtonIcon
                            name={icon}
                            type={type}
                            color={themeColor}
                        />
                    )}
                    {title && (
                        <ButtonText type={type} color={themeColor}>
                            {title}
                        </ButtonText>
                    )}
                </ButtonContent>
            </ButtonWrapper>
        </View>
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

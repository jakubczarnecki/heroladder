import React from "react"
import PropTypes from "prop-types"
import { AvatarImg, AvatarWrapper, RoundedPressable } from "./styled"

const Avatar = ({ img, press, size, style }) => {
    return (
        <AvatarWrapper style={style}>
            <RoundedPressable onPress={press}>
                <AvatarImg img={img} size={size} />
            </RoundedPressable>
        </AvatarWrapper>
    )
}

Avatar.propTypes = {
    img: PropTypes.number,
    press: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.array,
}

export default Avatar

import React from "react"
import PropTypes from "prop-types"
import { AvatarImg, AvatarWrapper, RoundedPressable } from "./styled"
import defaultUser from "../../../assets/img/defaultUser.png"

const Avatar = ({ img, press, size, style }) => {
    const image = img ? img.data.data : defaultUser

    return (
        <AvatarWrapper style={style}>
            <RoundedPressable onPress={press}>
                <AvatarImg img={image} size={size} />
            </RoundedPressable>
        </AvatarWrapper>
    )
}

Avatar.propTypes = {
    press: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.array,
}

export default Avatar

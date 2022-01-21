import React from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { AvatarImg, AvatarWrapper, RoundedPressable } from "./styled"
import defaultUser from "../../../assets/img/defaultUser.png"

const Avatar = ({ img, onPress, size, style }) => {
    const image = img ? { uri: axios.defaults.baseURL + img } : defaultUser

    return (
        <AvatarWrapper style={style}>
            <RoundedPressable onPress={onPress}>
                <AvatarImg img={image} size={size} />
            </RoundedPressable>
        </AvatarWrapper>
    )
}

Avatar.propTypes = {
    img: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.number,
    style: PropTypes.array,
}

export default Avatar

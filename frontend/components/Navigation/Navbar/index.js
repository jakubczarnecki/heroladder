import React from "react"
import PropTypes from "prop-types"
import { Entypo } from "@expo/vector-icons"
import { NavbarWrapper, LogoImg, IconsWrapper } from "./styled"
import GradientWrapper from "../../Layout/GradientWrapper"
import LogoWhite from "../../../assets/img/logo-01.png"

const Navbar = ({ back, route, navigation }) => {
    return (
        <GradientWrapper>
            <NavbarWrapper>
                <LogoImg source={LogoWhite} width="80" />
                <IconsWrapper>
                    <Entypo
                        name="menu"
                        size={45}
                        color="white"
                        onPress={() => {
                            console.log("OPEN MENU")
                        }}
                    />
                </IconsWrapper>
            </NavbarWrapper>
        </GradientWrapper>
    )
}

Navbar.propTypes = {
    back: PropTypes.object,
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default Navbar

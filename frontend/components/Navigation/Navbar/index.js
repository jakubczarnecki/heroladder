import React from "react"
import PropTypes from "prop-types"
import { Entypo } from "@expo/vector-icons"
import { NavbarWrapper, LogoImg, IconsWrapper } from "./styled"
import { LinearGradient } from "expo-linear-gradient"
import LogoWhite from "../../../assets/img/logo-01.png"
import theme from "../../../styles/Theme"

const Navbar = ({ back, route, navigation }) => {
    return (
        <LinearGradient
            colors={[theme.colors.primary, theme.colors.primaryDark]}
        >
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
        </LinearGradient>
    )
}

Navbar.propTypes = {
    back: PropTypes.object,
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default Navbar

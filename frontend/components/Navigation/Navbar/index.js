import React from "react"
import PropTypes from "prop-types"
import { FontAwesome5 } from "@expo/vector-icons"
import { NavbarWrapper, LogoImg, IconsWrapper } from "./styled"
import GradientWrapper from "../../Layout/GradientWrapper"
import LogoWhite from "../../../assets/img/logo-01.png"

const Navbar = ({ back, route, navigation }) => {
    return (
        <GradientWrapper>
            <NavbarWrapper>
                <LogoImg source={LogoWhite} width="85" />
                <IconsWrapper>
                    {route.name === "Drawer" ? (
                        <FontAwesome5
                            name="times"
                            size={40}
                            color="white"
                            onPress={() => {
                                navigation.goBack()
                            }}
                        />
                    ) : (
                        <FontAwesome5
                            name="bars"
                            size={40}
                            color="white"
                            onPress={() => {
                                navigation.navigate("Drawer")
                            }}
                        />
                    )}
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

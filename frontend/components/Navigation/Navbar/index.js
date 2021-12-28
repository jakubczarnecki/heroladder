import React from "react"
import PropTypes from "prop-types"
import { FontAwesome5 } from "@expo/vector-icons"
import { NavbarWrapper, LogoImg, IconsWrapper } from "./styled"
import { GradientWrapper } from "../../Layout"
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
                            size={35}
                            color="white"
                            onPress={() => {
                                navigation.toggleDrawer()
                            }}
                        />
                    ) : (
                        <FontAwesome5
                            name="bars"
                            size={35}
                            color="white"
                            onPress={() => {
                                navigation.toggleDrawer()
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

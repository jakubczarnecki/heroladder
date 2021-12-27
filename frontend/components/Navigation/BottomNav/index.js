import React from "react"
import { FontAwesome } from "@expo/vector-icons"
import { BottomNavWrapper } from "./styled"
import { LinearGradient } from "expo-linear-gradient"
import theme from "../../../styles/Theme"
import { IconsWrapper } from "./styled"

const BottomNav = () => {
    return (
        <LinearGradient
            colors={[theme.colors.primary, theme.colors.primaryDark]}
        >
            <BottomNavWrapper>
                <IconsWrapper>
                    <FontAwesome name="home" size={45} color="white" />
                    <FontAwesome name="map-marker" size={45} color="white" />
                    <FontAwesome name="th-list" size={45} color="white" />
                </IconsWrapper>
            </BottomNavWrapper>
        </LinearGradient>
    )
}

export default BottomNav

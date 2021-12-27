import React from "react"
import { FontAwesome } from "@expo/vector-icons"
import { BottomNavWrapper } from "./styled"
import GradientWrapper from "../../Layout/GradientWrapper"
import { IconsWrapper } from "./styled"

const BottomNav = () => {
    return (
        <GradientWrapper>
            <BottomNavWrapper>
                <IconsWrapper>
                    <FontAwesome name="home" size={45} color="white" />
                    <FontAwesome name="map-marker" size={45} color="white" />
                    <FontAwesome name="th-list" size={45} color="white" />
                </IconsWrapper>
            </BottomNavWrapper>
        </GradientWrapper>
    )
}

export default BottomNav

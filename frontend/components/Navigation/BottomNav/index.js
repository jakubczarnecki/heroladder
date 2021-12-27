import React from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { BottomNavWrapper } from "./styled"
import GradientWrapper from "../../Layout/GradientWrapper"
import { IconsWrapper } from "./styled"

const BottomNav = () => {
    return (
        <GradientWrapper>
            <BottomNavWrapper>
                <IconsWrapper>
                    <FontAwesome5 name="home" size={30} color="white" />
                    <FontAwesome5
                        name="map-marker-alt"
                        size={30}
                        color="white"
                    />
                    <FontAwesome5 name="th-list" size={30} color="white" />
                </IconsWrapper>
            </BottomNavWrapper>
        </GradientWrapper>
    )
}

export default BottomNav

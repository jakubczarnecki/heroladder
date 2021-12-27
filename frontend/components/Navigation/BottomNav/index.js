import React from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { BottomNavWrapper } from "./styled"
import GradientWrapper from "../../Layout/GradientWrapper"
import { IconsWrapper } from "./styled"

const BottomNav = () => {
    const navigation = useNavigation()

    return (
        <GradientWrapper>
            <BottomNavWrapper>
                <IconsWrapper>
                    <FontAwesome5
                        name="home"
                        size={30}
                        color="white"
                        onPress={() => navigation.navigate("Home")}
                    />
                    <FontAwesome5
                        name="map-marker-alt"
                        size={30}
                        color="white"
                        onPress={() => navigation.navigate("Area")}
                    />
                    <FontAwesome5
                        name="th-list"
                        size={30}
                        color="white"
                        onPress={() => navigation.navigate("Tournaments")}
                    />
                </IconsWrapper>
            </BottomNavWrapper>
        </GradientWrapper>
    )
}

export default BottomNav

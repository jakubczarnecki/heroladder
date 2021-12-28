import React from "react"
import PropTypes from "prop-types"
import { FontAwesome5 } from "@expo/vector-icons"
import { BottomNavWrapper, IconWrapper } from "./styled"
import GradientWrapper from "../../Layout/GradientWrapper"
import { IconsWrapper, BottomNavIcon } from "./styled"
import content from "./content"

const BottomNav = ({ state, descriptors, navigation }) => {
    return (
        <GradientWrapper>
            <BottomNavWrapper>
                <IconsWrapper>
                    {content.map((element, index) => (
                        <IconWrapper
                            key={index}
                            current={state.index === index}
                            onPress={() => element.onPress(navigation)}
                        >
                            <FontAwesome5
                                size={30}
                                color="white"
                                name={element.icon}
                            />
                        </IconWrapper>
                    ))}
                </IconsWrapper>
            </BottomNavWrapper>
        </GradientWrapper>
    )
}

BottomNav.propTypes = {
    state: PropTypes.object,
    descriptors: PropTypes.object,
    navigation: PropTypes.object,
}

export default BottomNav

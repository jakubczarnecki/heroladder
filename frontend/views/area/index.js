import React from "react"
import PropTypes from "prop-types"
import { FadeInView } from "../../components/Transitions"
import { Text } from "react-native"
import { LayoutWrapper } from "../../components/Layout"

const areaView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapper>
                <Text>area</Text>
            </LayoutWrapper>
        </FadeInView>
    )
}

areaView.propTypes = {
    navigation: PropTypes.object,
}

export default areaView

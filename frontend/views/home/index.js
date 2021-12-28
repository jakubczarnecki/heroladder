import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import { LayoutWrapper } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"

const homeView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapper>
                <Text>home</Text>
            </LayoutWrapper>
        </FadeInView>
    )
}

homeView.propTypes = {
    navigation: PropTypes.object,
}

export default homeView

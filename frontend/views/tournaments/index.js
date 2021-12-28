import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import LayoutWrapper from "../../components/Layout"
import FadeInView from "../../components/Transitions/FadeInView"

const tournamentsView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapper>
                <Text>tournaments</Text>
            </LayoutWrapper>
        </FadeInView>
    )
}

tournamentsView.propTypes = {
    navigation: PropTypes.object,
}

export default tournamentsView

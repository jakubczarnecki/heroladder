import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import LayoutWrapper from "../../components/Layout"

const tournamentsView = ({ navigation }) => {
    return (
        <LayoutWrapper>
            <Text>tournaments</Text>
        </LayoutWrapper>
    )
}

tournamentsView.propTypes = {
    navigation: PropTypes.object,
}

export default tournamentsView

import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import LayoutWrapper from "../../components/Layout"

const homeView = ({ navigation }) => {
    return (
        <LayoutWrapper>
            <Text>home</Text>
        </LayoutWrapper>
    )
}

homeView.propTypes = {
    navigation: PropTypes.object,
}

export default homeView

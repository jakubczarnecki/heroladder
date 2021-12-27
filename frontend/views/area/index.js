import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import LayoutWrapper from "../../components/Layout"

const areaView = ({ navigation }) => {
    return (
        <LayoutWrapper>
            <Text>area</Text>
        </LayoutWrapper>
    )
}

areaView.propTypes = {
    navigation: PropTypes.object,
}

export default areaView

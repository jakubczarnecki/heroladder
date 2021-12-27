import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import BottomNav from "../../components/Navigation/BottomNav"
import LayoutWrapper from "../../components/Layout"

const areaView = ({ navigation }) => {
    return (
        <>
            <LayoutWrapper>
                <Text>home</Text>
            </LayoutWrapper>
            <BottomNav />
        </>
    )
}

areaView.propTypes = {
    navigation: PropTypes.object,
}

export default areaView

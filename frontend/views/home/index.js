import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Surface, Text } from "react-native-paper"

const homeView = ({ navigation }) => {
    return (
        <Surface>
            <View>
                <Text>home</Text>
            </View>
        </Surface>
    )
}

homeView.propTypes = {
    navigation: PropTypes.object,
}

export default homeView

import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Surface, Text } from "react-native-paper"

const areaView = ({ navigation }) => {
    return (
        <Surface>
            <View>
                <Text>area</Text>
            </View>
        </Surface>
    )
}

areaView.propTypes = {
    navigation: PropTypes.object,
}

export default areaView

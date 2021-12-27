import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Surface, Text } from "react-native-paper"

const tournamentsView = ({ navigation }) => {
    return (
        <Surface>
            <View>
                <Text>tournaments</Text>
            </View>
        </Surface>
    )
}

tournamentsView.propTypes = {
    navigation: PropTypes.object,
}

export default tournamentsView

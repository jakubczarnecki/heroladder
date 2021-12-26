import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Surface, Text, Button } from "react-native-paper"

const registerView = ({ navigation }) => {
    return (
        <Surface>
            <View>
                <Text>Strona Rejestracji</Text>
                <Button
                    mode="contained"
                    icon="chevron-right"
                    onPress={() => navigation.navigate("Login")}
                >
                    Do logowania
                </Button>
            </View>
        </Surface>
    )
}

registerView.propTypes = {
    navigation: PropTypes.object,
}

export default registerView

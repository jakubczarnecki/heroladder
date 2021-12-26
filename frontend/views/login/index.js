import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Surface, Text, Button } from "react-native-paper"

const loginView = ({ navigation }) => {
    return (
        <Surface>
            <View>
                <Text>Strona Logowania</Text>
                <Button
                    mode="contained"
                    icon="chevron-right"
                    onPress={() => navigation.navigate("Register")}
                >
                    Do rejestracji
                </Button>
            </View>
        </Surface>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView

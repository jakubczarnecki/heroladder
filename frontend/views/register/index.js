import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Text, Button } from "react-native"

const registerView = ({ navigation }) => {
    return (
        <View>
            <Text>Strona Rejestracji</Text>
            <Button
                title="Do logowania"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}

registerView.propTypes = {
    navigation: PropTypes.object,
}

export default registerView

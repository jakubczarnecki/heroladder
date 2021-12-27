import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Text, Button } from "react-native"

const loginView = ({ navigation }) => {
    return (
        <View>
            <Text>Strona Logowania</Text>
            <Button
                title="Do rejestracji"
                onPress={() => navigation.navigate("Register")}
            />
        </View>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView

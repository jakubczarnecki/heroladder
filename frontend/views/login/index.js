import React from "react"
import PropTypes from "prop-types"
import { Text, Button } from "react-native"
import LayoutWrapper from "../../components/Layout"

const loginView = ({ navigation }) => {
    return (
        <>
            <LayoutWrapper>
                <Text>Strona Logowania</Text>
                <Button
                    title="Do rejestracji"
                    onPress={() => navigation.navigate("Register")}
                />
            </LayoutWrapper>
        </>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView

import React from "react"
import PropTypes from "prop-types"
import { Text, Button } from "react-native"
import LayoutWrapper from "../../components/Layout"
import FadeInView from "../../components/Transitions/FadeInView"

const loginView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapper>
                <Text>Strona Logowania</Text>
                <Button
                    title="Do rejestracji"
                    onPress={() => navigation.navigate("Register")}
                />
            </LayoutWrapper>
        </FadeInView>
    )
}

loginView.propTypes = {
    navigation: PropTypes.object,
}

export default loginView

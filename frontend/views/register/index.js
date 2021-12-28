import React from "react"
import PropTypes from "prop-types"
import { Text, Button } from "react-native"
import BottomNav from "../../components/Navigation/BottomNav"
import LayoutWrapper from "../../components/Layout"
import FadeInView from "../../components/Transitions/FadeInView"

const registerView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapper>
                <Text>Strona Rejestracji</Text>
                <Button
                    title="Do logowania"
                    onPress={() => navigation.navigate("Login")}
                />
            </LayoutWrapper>
        </FadeInView>
    )
}

registerView.propTypes = {
    navigation: PropTypes.object,
}

export default registerView

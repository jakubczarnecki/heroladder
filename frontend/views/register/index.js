import React from "react"
import PropTypes from "prop-types"
import { Text, Button } from "react-native"
import BottomNav from "../../components/Navigation/BottomNav"
import LayoutWrapper from "../../components/Layout"

const registerView = ({ navigation }) => {
    return (
        <>
            <LayoutWrapper>
                <Text>Strona Rejestracji</Text>
                <Button
                    title="Do logowania"
                    onPress={() => navigation.navigate("Login")}
                />
            </LayoutWrapper>
            <BottomNav />
        </>
    )
}

registerView.propTypes = {
    navigation: PropTypes.object,
}

export default registerView

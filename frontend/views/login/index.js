import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import { LayoutWrapper } from "../../components/Layout"
import { FadeInView } from "../../components/Transitions"
import { TextInput, Button } from "../../components/Form"

const loginView = ({ navigation }) => {
    return (
        <FadeInView>
            <LayoutWrapper>
                <Text>Strona Logowania</Text>
                <TextInput placeholder="Login" />
                <TextInput password={true} placeholder="***** ***" />
                <Button
                    title="Do rejestracji"
                    onPress={() => navigation.navigate("Register")}
                />
                <Button
                    type="contained"
                    icon="eye"
                    disabled={true}
                    title="Do rejestracji"
                    onPress={() => navigation.navigate("Register")}
                />
                <Button
                    type="outlined"
                    icon="eye"
                    color="accent"
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

import React from "react"
import PropTypes from "prop-types"
import { Appbar } from "react-native-paper"

const Navbar = ({ back, route, navigation }) => {
    return (
        <Appbar.Header>
            {back && <Appbar.BackAction onPress={navigation.goBack} />}

            <Appbar.Content title={route.name} />
            <Appbar.Action
                icon="menu"
                onPress={() => {
                    console.log("OPEN MENU")
                }}
            />
        </Appbar.Header>
    )
}

Navbar.propTypes = {
    back: PropTypes.object,
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default Navbar

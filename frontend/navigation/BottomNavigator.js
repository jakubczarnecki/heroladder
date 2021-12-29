import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BottomNav } from "../components/Navigation"

import {
    homeView,
    areaView,
    tournamentsView,
    loginView,
    registerView,
} from "../views"
import { defaultOptions } from "./config"

function BottomNavigator() {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            tabBar={({ state, descriptors, navigation }) => (
                <BottomNav
                    state={state}
                    descriptors={descriptors}
                    navigation={navigation}
                />
            )}
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
        ></Tab.Navigator>
    )
}

export default BottomNavigator

import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import BottomNav from "../components/Navigation/BottomNav"

import homeView from "../views/home"
import areaView from "../views/area"
import tournamentsView from "../views/tournaments"
import loginView from "../views/login"
import registerView from "../views/register"

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
        >
            <Tab.Screen
                name="Home"
                component={homeView}
                options={defaultOptions}
            />
            <Tab.Screen
                name="Area"
                component={areaView}
                options={defaultOptions}
            />
            <Tab.Screen
                name="Tournaments"
                component={tournamentsView}
                options={defaultOptions}
            />
            <Tab.Screen
                name="Login"
                component={loginView}
                options={defaultOptions}
            />
            <Tab.Screen
                name="Register"
                component={registerView}
                options={defaultOptions}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigator

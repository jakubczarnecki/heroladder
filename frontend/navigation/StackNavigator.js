import React from "react"
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import Navbar from "../components/Navigation/Navbar"

import loginView from "../views/login"
import registerView from "../views/register"
import homeView from "../views/home"
import areaView from "../views/area"
import tournamentsView from "../views/tournaments"
import drawer from "../components/Navigation/drawer"
import BottomNav from "../components/Navigation/BottomNav"

const Stack = createStackNavigator()

const defaultOptions = {
    ...TransitionPresets.DefaultTransition,
}

export default function MainStackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Login"
                component={loginView}
                options={defaultOptions}
            />
            <Stack.Screen
                name="Register"
                component={registerView}
                options={defaultOptions}
            />
            <Stack.Screen
                name="Home"
                component={homeView}
                options={defaultOptions}
            />
            <Stack.Screen
                name="Area"
                component={areaView}
                options={defaultOptions}
            />
            <Stack.Screen
                name="Tournaments"
                component={tournamentsView}
                options={defaultOptions}
            />
        </Stack.Navigator>
    )
}

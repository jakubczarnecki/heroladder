import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { defaultOptions } from "./config"
import { loginView, registerView } from "../views"

const Stack = createStackNavigator()

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
        </Stack.Navigator>
    )
}

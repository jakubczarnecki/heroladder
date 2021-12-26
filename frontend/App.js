import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

import loginView from "./views/login"
import registerView from "./views/register"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={loginView} />
                <Stack.Screen name="Register" component={registerView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

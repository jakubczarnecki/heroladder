import React from "react"
import Constants from "expo-constants"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"

import theme from "./styles/Theme"
import MainStackNavigator from "./navigation/StackNavigator"
import DrawerNavigator from "./navigation/DrawerNavigator"
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
    return (
        <>
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <NavigationContainer>
                    <DrawerNavigator />
                </NavigationContainer>
            </View>

            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primaryDark}
            />
        </>
    )
}

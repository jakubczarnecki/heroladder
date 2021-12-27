import React from "react"
import Constants from "expo-constants"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import theme from "./styles/Theme"
import Navbar from "./components/Navigation/Navbar"

import loginView from "./views/login"
import registerView from "./views/register"
import homeView from "./views/home"
import areaView from "./views/area"
import tournamentsView from "./views/tournaments"
import drawer from "./views/drawer"
import BottomNav from "./components/Navigation/BottomNav"

const Stack = createStackNavigator()

const defaultOptions = {
    ...TransitionPresets.DefaultTransition,
}

export default function App() {
    return (
        <>
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Login"
                        screenOptions={{
                            headerMode: "float",
                            header: ({ back, route, navigation }) => (
                                <Navbar
                                    back={back}
                                    route={route}
                                    navigation={navigation}
                                />
                            ),
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
                        <Stack.Screen
                            name="Drawer"
                            component={drawer}
                            options={{
                                ...TransitionPresets.SlideFromRightIOS,
                            }}
                        />
                    </Stack.Navigator>
                    <BottomNav />
                </NavigationContainer>
            </View>

            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primaryDark}
            />
        </>
    )
}

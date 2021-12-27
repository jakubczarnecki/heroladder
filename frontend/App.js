import React from "react"
import Constants from "expo-constants"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { Provider as PaperProvider } from "react-native-paper"
import theme from "./styles/Theme"
import Navbar from "./components/Navigation/Navbar"

import loginView from "./views/login"
import registerView from "./views/register"
import BottomNav from "./components/Navigation/BottomNav"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Login"
                        screenOptions={{
                            header: ({ back, route, navigation }) => (
                                <Navbar
                                    back={back}
                                    route={route}
                                    navigation={navigation}
                                />
                            ),
                        }}
                    >
                        <Stack.Screen name="Login" component={loginView} />
                        <Stack.Screen
                            name="Register"
                            component={registerView}
                        />
                    </Stack.Navigator>
                    <BottomNav />
                </NavigationContainer>
            </View>

            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primaryDark}
            />
        </PaperProvider>
    )
}

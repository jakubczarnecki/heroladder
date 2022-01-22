import React from "react"
import Constants from "expo-constants"
import { View } from "react-native"
import { StatusBar } from "expo-status-bar"
import axios from "axios"
import { Provider as ReduxProvider } from "react-redux"

import store from "./redux/store"
import theme from "./styles/Theme"
import { DrawerNavigator } from "./navigation"
import { NavigationContainer } from "@react-navigation/native"

// 10.0.2.2 - przekierowanie emulatora na localhost gospodarza (domyślne)
axios.defaults.baseURL = "http://10.0.2.2:8800/api/"
// axios.defaults.baseURL = "http://192.168.1.13:8800/api/"
// axios.defaults.baseURL = "http://192.168.0.144:8800/api/"

export default function App() {
    return (
        <ReduxProvider store={store}>
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <NavigationContainer>
                    <DrawerNavigator />
                </NavigationContainer>
            </View>

            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primaryDark}
            />
        </ReduxProvider>
    )
}

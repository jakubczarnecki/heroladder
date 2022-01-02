import React from "react"
import { useSelector } from "react-redux"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Navbar } from "../components/Navigation"
import { Drawer as DrawerComponent } from "../components/Navigation"

import {
    homeView,
    areaView,
    tournamentsView,
    loginView,
    registerView,
    profileView,
} from "../views"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    const userID = useSelector((state) => state.user.id)

    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => (
                <DrawerComponent navigation={navigation} />
            )}
            screenOptions={{
                headerMode: "float",
                header: ({ back, route, navigation }) => (
                    <Navbar back={back} route={route} navigation={navigation} />
                ),
                drawerPosition: "right",
                drawerType: "slide",
                drawerStyle: {
                    width: "96%",
                },
            }}
            initialRouteName="Area"
        >
            {userID ? (
                <>
                    <Drawer.Screen name="Home" component={homeView} />
                    <Drawer.Screen name="Area" component={areaView} />
                    <Drawer.Screen name="Profile" component={profileView} />
                    <Drawer.Screen
                        name="Tournaments"
                        component={tournamentsView}
                    />
                </>
            ) : (
                <>
                    <Drawer.Screen
                        name="Login"
                        component={loginView}
                        options={{ swipeEnabled: false, headerShown: false }}
                    />
                    <Drawer.Screen
                        name="Register"
                        component={registerView}
                        options={{ swipeEnabled: false, headerShown: false }}
                    />
                </>
            )}
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

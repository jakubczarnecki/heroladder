import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Navbar } from "../components/Navigation"
import { Drawer as DrawerComponent } from "../components/Navigation"
import BottomNavigator from "./BottomNavigator"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
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
        >
            <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

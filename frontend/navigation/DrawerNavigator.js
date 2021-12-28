import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import StackNavigator from "./StackNavigator"
import Navbar from "../components/Navigation/Navbar"
import DrawerComponent from "../components/Navigation/drawer"

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerComponent />}
            screenOptions={{
                headerMode: "float",
                header: ({ back, route, navigation }) => (
                    <Navbar back={back} route={route} navigation={navigation} />
                ),
                drawerPosition: "right",
                drawerStyle: {
                    width: "90%",
                },
            }}
        >
            <Drawer.Screen name="Home2" component={StackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

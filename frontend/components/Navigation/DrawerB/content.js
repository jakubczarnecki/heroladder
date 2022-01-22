import { logout } from "../../../redux/actions/userActions"

export default [
    {
        title: "Home page",
        icon: "home",
        onPress: (navigation) => {
            navigation.navigate("Home")
        },
    },
    {
        title: "Your profile",
        icon: "user-alt",
        onPress: (navigation, _, userID) => {
            navigation.navigate("Profile", { userID })
        },
    },
    {
        title: "Your area",
        icon: "map-marker-alt",
        onPress: (navigation) => {
            navigation.navigate("Area")
        },
    },
    {
        title: "About the app",
        icon: "info-circle",
        onPress: (navigation) => {
            navigation.navigate("About")
        },
    },
    {
        title: "Log out",
        icon: "sign-out-alt",
        onPress: (navigation, dispatch) => {
            navigation.closeDrawer()
            dispatch(logout())
        },
    },
]

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
        onPress: (navigation) => {
            navigation.navigate("Profile")
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
        title: "Tournaments",
        icon: "th-list",
        onPress: (navigation) => {
            navigation.navigate("Tournaments")
        },
    },
    {
        title: "About",
        icon: "info-circle",
        onPress: (navigation) => {
            navigation.navigate("About")
        },
    },
    {
        title: "Logout",
        icon: "sign-out-alt",
        onPress: (navigation, dispatch) => {
            navigation.closeDrawer()
            dispatch(logout())
        },
    },
]

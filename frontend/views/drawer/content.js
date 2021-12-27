export default [
    {
        title: "Home page",
        icon: "home",
        onPress: (navigation) => navigation.navigate("Home"),
    },
    {
        title: "Your area",
        icon: "map-marker-alt",
        onPress: (navigation) => navigation.navigate("Area"),
    },
    {
        title: "Tournaments",
        icon: "th-list",
        onPress: (navigation) => navigation.navigate("Tournaments"),
    },
    { title: "", icon: "" },
    { title: "", icon: "" },
    {
        title: "Logout",
        icon: "sign-out-alt",
        onPress: (navigation) => navigation.navigate("Login"),
    },
]

export default [
    {
        title: "Home",
        icon: "home",
        onPress: (navigation) => {
            navigation.navigate("Home")
        },
    },
    {
        title: "Area",
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
]

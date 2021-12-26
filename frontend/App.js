import React from "react"
import { StyleSheet, View } from "react-native"
import Example from "./components/ExampleShadowBox"

export default function App() {
    return (
        <View style={styles.container}>
            <Example />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})

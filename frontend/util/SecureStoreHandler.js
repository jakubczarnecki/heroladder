import * as SecureStore from "expo-secure-store"

export async function getValue(key) {
    let result = await SecureStore.getItemAsync(key)
    if (result) {
        console.log("Storage: ", result)
    } else {
        console.log("No values stored under that key.")
    }
    return result
}

export async function setValue(key, value) {
    await SecureStore.setItemAsync(key, value)
}

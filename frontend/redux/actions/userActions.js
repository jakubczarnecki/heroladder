import axios from "axios"
import * as SecureStore from "expo-secure-store"
import {
    CLEAR_ERRORS,
    SET_ERRORS,
    SET_LOADING_UI,
    SET_USER,
    SET_UNAUTHENTICATED,
} from "../types"

export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: SET_LOADING_UI })
    axios
        .post("/auth/login", userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token)
            const user = {
                id: res.data._id,
                username: res.data.username,
                email: res.data.email,
                achievements: res.data.achievements,
                tournamentsHistory: res.data.tournamentsHistory,
            }

            dispatch({
                type: SET_USER,
                payload: user,
            })
            dispatch({ type: CLEAR_ERRORS })
            // navigate to home
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: SET_ERRORS, payload: err.response.data })
        })
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: SET_LOADING_UI })
    console.log("getUserData")
}

export const logout = () => (dispatch) => {
    dispatch({ type: SET_UNAUTHENTICATED })
}

const setAuthorizationHeader = async (token) => {
    const authHeader = `Bearer ${token}`
    // set header to some local storage
    await SecureStore.setItemAsync("authToken", authHeader)
    axios.defaults.headers.common["authorization"] = authHeader
}

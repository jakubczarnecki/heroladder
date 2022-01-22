import axios from "axios"
import * as SecureStore from "expo-secure-store"
import {
    CLEAR_ERRORS,
    ADD_ERROR,
    SET_LOADING_UI,
    SET_USER,
    SET_UNAUTHENTICATED,
    SET_ACTION_SUCCESSFUL,
} from "../types"

export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: SET_LOADING_UI })
    dispatch({ type: CLEAR_ERRORS })
    axios
        .post("/auth/login", userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token).then(() => {
                const user = {
                    id: res.data._id,
                    username: res.data.username,
                    email: res.data.email,
                    avatar: res.data.avatar
                        ? `pictures/${res.data._id}/avatar`
                        : null,
                }

                dispatch({
                    type: SET_USER,
                    payload: user,
                })
                dispatch({ type: CLEAR_ERRORS })
            })
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

export const registerUser = (userData) => (dispatch) => {
    dispatch({ type: SET_LOADING_UI })
    dispatch({ type: CLEAR_ERRORS })
    axios
        .post("/auth/register", userData)
        .then((res) => {
            dispatch({ type: SET_ACTION_SUCCESSFUL })
            return res
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

export const logout = () => (dispatch) => {
    dispatch({ type: SET_UNAUTHENTICATED })
}

export const updateProfile = (userData, confirmPassword) => (dispatch) => {
    dispatch({ type: SET_LOADING_UI })
    dispatch({ type: CLEAR_ERRORS })

    // const actions = []
    // if (userData.username || userData.password) {

    // }
}

export const deleteAccount = (confirmPassword) => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
    axios
        .delete("/users", { data: { confirmPassword } })
        .then(() => {
            dispatch({ type: CLEAR_ERRORS })
            dispatch({ type: SET_ACTION_SUCCESSFUL })
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

const setAuthorizationHeader = async (token) => {
    const authHeader = `Bearer ${token}`
    await SecureStore.setItemAsync("authToken", authHeader).then(
        () => (axios.defaults.headers.common["authorization"] = authHeader)
    )
}

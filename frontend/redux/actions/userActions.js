import axios from "axios"
import * as SecureStore from "expo-secure-store"
import {
    CLEAR_ERRORS,
    ADD_ERROR,
    SET_LOADING_UI,
    SET_USER,
    SET_UNAUTHENTICATED,
    SET_ACTION_STATUS,
    STATUS_ACCOUNT_CREATED,
    STATUS_ACCOUNT_DELETED,
    UPDATE_USER,
    STATUS_PROFILE_UPDATED,
    UPDATE_USERNAME,
} from "../types"
import { getUserData } from "./dataActions"

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
            dispatch({
                type: SET_ACTION_STATUS,
                payload: STATUS_ACCOUNT_CREATED,
            })
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
    dispatch({ type: CLEAR_ERRORS })

    if (userData.username || userData.password1 || userData.password2) {
        axios
            .put("/users/", {
                username: userData.username,
                password1: userData.password1,
                password2: userData.password2,
                confirmPassword,
            })
            .then((res) => {
                dispatch({
                    type: SET_ACTION_STATUS,
                    payload: STATUS_PROFILE_UPDATED,
                })
                if (userData.username) {
                    dispatch({
                        type: UPDATE_USERNAME,
                        payload: userData.username,
                    })
                }
            })
            .catch((err) => {
                console.log("err", err.response.data)
                dispatch({ type: ADD_ERROR, payload: err.response.data })
            })
    }

    userData.avatar &&
        fetch(userData.avatar)
            .then((avatar) => {
                return avatar.blob()
            })
            .then((blob) => {
                var formdata = new FormData()
                formdata.append("avatar", {
                    uri: userData.avatar,
                    type: blob.type,
                })

                // return axios.put("/pictures/avatar", formdata, {
                //     headers: {
                //         "Content-Type": "multipart/form-data",
                //     },
                // })
                return true
            })
            .then((res) => {
                dispatch({
                    type: SET_ACTION_STATUS,
                    payload: STATUS_PROFILE_UPDATED,
                })
            })
            .catch((err) => {
                dispatch({ type: ADD_ERROR, payload: err.response.data })
            })

    userData.background &&
        fetch(userData.background)
            .then((background) => {
                return background.blob()
            })
            .then((blob) => {
                var formdata = new FormData()
                formdata.append("background", {
                    uri: userData.background,
                    type: blob.type,
                })

                // return axios.put("/pictures/background", formdata, {
                //     headers: {
                //         "Content-Type": "multipart/form-data",
                //     },
                // })
                return true
            })
            .then((res) => {
                console.log("background res", JSON.stringify(res, null, 2))
                dispatch({
                    type: SET_ACTION_STATUS,
                    payload: STATUS_PROFILE_UPDATED,
                })
            })
            .catch((err) => {
                dispatch({ type: ADD_ERROR, payload: err.response.data })
            })
}

export const deleteAccount = (confirmPassword) => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
    axios
        .delete("/users", { data: { confirmPassword } })
        .then(() => {
            dispatch({ type: CLEAR_ERRORS })
            dispatch({
                type: SET_ACTION_STATUS,
                payload: STATUS_ACCOUNT_DELETED,
            })
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

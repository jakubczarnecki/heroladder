import axios from "axios"
import { CLEAR_ERRORS, SET_ERRORS, SET_LOADING_UI, SET_USER } from "../types"

export const loginUser = (userData) => (dispatch) => {
    dispatch({ type: SET_LOADING_UI })
    axios
        .post("/auth/login", userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token)
            const user = {
                id: res.data.id,
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

const setAuthorizationHeader = (token) => {
    const authHeader = `Bearer ${token}`
    // set header to some local storage
    axios.defaults.headers.common["authorization"] = authHeader
}

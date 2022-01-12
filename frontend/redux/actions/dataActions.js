import axios from "axios"
import {
    SET_LOADING_DATA,
    ADD_ERROR,
    SET_FEED,
    SET_TOURNAMENT,
    SET_AREA_TOURNAMENTS,
    SIGN_OFF_FROM_TOURNAMENT,
    SIGN_UP_TO_TOURNAMENT,
    CLEAR_ERRORS,
} from "../types"

// TODO: change /all to /feed or /area
export const setFeed = () => (dispatch) => {
    console.log("Set feed")
    dispatch({ type: SET_LOADING_DATA })
    dispatch({ type: CLEAR_ERRORS })
    axios
        .get("/tournaments/all")
        .then((res) => {
            const tournaments = res.data
            let payload = []

            const users = tournaments.map(
                (tournament) => tournament.organizerId
            )
            const uniqueUsers = [...new Set(users)]

            Promise.all(
                uniqueUsers.map((userID) => axios.get(`/users/${userID}`))
            ).then((res) => {
                tournaments.map((tournament) => {
                    const creator = res.find(
                        (r) => r.data._id === tournament.organizerId
                    )
                    payload.push({
                        ...tournament,
                        creatorUsername: creator.data.username,
                        creatorProfileImg: creator.data.profileImg,
                    })
                })

                dispatch({ type: SET_FEED, payload: payload })
            })
        })
        .catch((err) => {
            console.log("error", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

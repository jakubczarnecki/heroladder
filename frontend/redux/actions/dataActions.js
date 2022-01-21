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
    SET_WINNER,
    ADD_TOURNAMENT,
    SET_USERS_FOUND,
    SET_USER_PROFILE,
    SET_ACTION_SUCCESSFUL,
} from "../types"

// TODO: change /all to /feed or /area
export const setFeed = () => (dispatch) => {
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
                        organizerUsername: creator.data.username,
                        organizerAvatar: creator.data.avatar
                            ? `pictures/${creator.data._id}/avatar`
                            : null,
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

export const setTournament = (tournamentID) => (dispatch) => {
    dispatch({ type: SET_LOADING_DATA })
    dispatch({ type: CLEAR_ERRORS })

    let tournament
    axios
        .get(`/tournaments/${tournamentID}`)
        .then((res) => {
            tournament = res.data

            const teams = []

            tournament.matches[0].forEach((match) => {
                if (match.teams.length != 0) {
                    match.teams.forEach((team) => teams.push(team))
                }
            })
            tournament.teams = teams
            return axios.get(`/users/${tournament.organizerId}`)
        })
        .then((res) => {
            tournament.organizerUsername = res.data.username
            tournament.organizerAvatar = res.data.avatar
                ? `pictures/${res.data._id}/avatar`
                : null
            dispatch({ type: SET_TOURNAMENT, payload: tournament })
        })
        .catch((err) => {
            console.log("error", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

export const selectWinner = (tournamentID, matchData) => (dispatch) => {
    dispatch({ type: SET_LOADING_DATA })
    dispatch({ type: CLEAR_ERRORS })

    axios
        .put(`/tournaments/${tournamentID}/claimWinner`, matchData)
        .then(() => {
            dispatch({
                type: SET_WINNER,
                payload: matchData,
            })
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

//creatorUsername, creatorProfileImg
export const addTournament = (newTournament, user) => (dispatch) => {
    dispatch({ type: SET_LOADING_DATA })
    dispatch({ type: CLEAR_ERRORS })

    axios
        .post("/tournaments/create", newTournament)
        .then((res) => {
            const tournamentData = {
                ...res.data,
                creatorUsername: user.username,
                creatorProfileImg: user.avatar,
            }

            dispatch({ type: ADD_TOURNAMENT, payload: tournamentData })
            dispatch({ type: SET_ACTION_SUCCESSFUL })
            return axios.put(`/tournaments/${res.data._id}/init`)
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

export const searchUsers = (username) => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
    axios
        .get(`/users/byUsername/${username}`)
        .then((res) => {
            dispatch({ type: SET_USERS_FOUND, payload: res.data })
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

export const getUserData = (userID) => (dispatch) => {
    dispatch({ type: SET_LOADING_DATA })
    let userData = {}
    axios
        .get(`/users/${userID}`)
        .then((res) => {
            console.log("res")
            return res.data
        })
        .then((user) => {
            userData = {
                ...user,
                avatar: user.avatar ? `pictures/${userID}/avatar` : null,
                background: user.background
                    ? `pictures/${userID}/background`
                    : null,
            }
            return axios.get(`/users/${userID}/organizedTournaments`)
        })
        .then((organized) => {
            console.log("Organized: ", organized.data)
            userData = { ...userData, organizedTournaments: organized.data }
            // + tournament history

            dispatch({ type: SET_USER_PROFILE, payload: userData })
        })
        .catch((err) => {
            console.log("err", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

export const clearSearchUsers = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: SET_USERS_FOUND, payload: [] })
}

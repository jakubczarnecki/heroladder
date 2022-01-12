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

export const setTournament = (tournamentID) => (dispatch) => {
    dispatch({ type: SET_LOADING_DATA })
    dispatch({ type: CLEAR_ERRORS })
    axios
        .get(`/tournaments/${tournamentID}`)
        .then((res) => {
            const tournament = res.data

            const teams = []
            tournament.matches[0].forEach((match) => {
                if (match.teams.length != 0) {
                    match.teams.forEach((team) => teams.push(team))
                }
            })
            tournament.teams = teams
            console.log(tournament)

            dispatch({ type: SET_TOURNAMENT, payload: tournament })
        })
        .catch((err) => {
            console.log("error", err.response.data)
            dispatch({ type: ADD_ERROR, payload: err.response.data })
        })
}

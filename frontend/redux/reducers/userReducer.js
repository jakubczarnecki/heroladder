import { SET_UNAUTHENTICATED, SET_USER } from "../types"

const initialState = {
    id: "",
    username: "",
    email: "",
    tournamentsHistory: [],
    createdTournaments: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload,
            }

        case SET_UNAUTHENTICATED: {
            return initialState
        }

        default:
            return state
    }
}

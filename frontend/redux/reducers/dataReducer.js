import {
    SET_FEED,
    SET_TOURNAMENT,
    SET_AREA_TOURNAMENTS,
    SIGN_UP_TO_TOURNAMENT,
    SIGN_OFF_FROM_TOURNAMENT,
    SET_LOADING_UI,
    SET_WINNER,
} from "../types"

const initialState = {
    tournaments: [],
    areaTournaments: [],
    tournament: {},
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_UI:
            return {
                ...state,
                loading: true,
            }
        case SET_FEED:
            return {
                ...state,
                tournaments: action.payload,
                loading: false,
            }
        case SET_TOURNAMENT:
            return {
                ...state,
                tournament: action.payload,
                loading: false,
            }
        case SET_AREA_TOURNAMENTS:
            return {
                ...state,
                tournament: action.payload,
                loading: false,
            }
        case SET_WINNER: {
            const newMatches = [...state.tournament.matches]
            newMatches[action.payload.stage].forEach((match) => {
                if (match.number === action.payload.number) {
                    match.winner = action.payload.winner
                }
            })

            return {
                ...state,
                tournament: {
                    ...state.tournament,
                    matches: newMatches,
                },
                loading: false,
            }
        }

        default:
            return state
    }
}

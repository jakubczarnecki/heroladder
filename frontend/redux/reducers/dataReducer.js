import {
    SET_FEED,
    SET_TOURNAMENT,
    SET_AREA_TOURNAMENTS,
    SIGN_UP_TO_TOURNAMENT,
    SIGN_OFF_FROM_TOURNAMENT,
} from "../types"

const initialState = {
    tournaments: [],
    areaTournaments: [],
    tournament: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FEED:
            return {
                ...state,
                tournaments: action.payload,
            }
        case SET_TOURNAMENT:
            return {
                ...state,
                tournament: action.payload,
            }
        case SET_AREA_TOURNAMENTS:
            return {
                ...state,
                tournament: action.payload,
            }
        default:
            return state
    }
}

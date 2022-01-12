import {
    SET_FEED,
    SET_TOURNAMENT,
    SET_AREA_TOURNAMENTS,
    SIGN_UP_TO_TOURNAMENT,
    SIGN_OFF_FROM_TOURNAMENT,
    SET_LOADING_UI,
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
        default:
            return state
    }
}

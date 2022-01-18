import {
    ADD_ERROR,
    CLEAR_ERRORS,
    SET_ACTION_SUCCESSFUL,
    SET_LOADING_UI,
    STOP_LOADING_UI,
    CLEAR_ACTION,
} from "../types"

const initialState = {
    loading: false,
    actionSuccess: false,
    errors: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                loading: false,
                errors: [...state.errors, action.payload],
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                actionSuccess: false,
                errors: [],
            }
        case SET_LOADING_UI:
            return {
                ...state,
                loading: true,
            }
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false,
            }
        case SET_ACTION_SUCCESSFUL:
            return {
                ...state,
                actionSuccess: true,
            }
        case CLEAR_ACTION:
            return {
                ...state,
                actionSuccess: false,
            }
        default:
            return state
    }
}

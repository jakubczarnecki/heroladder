import {
    SET_ERRORS,
    CLEAR_ERRORS,
    SET_LOADING_UI,
    STOP_LOADING_UI,
} from "../types"

const initialState = {
    loading: false,
    errors: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null,
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
        default:
            return state
    }
}

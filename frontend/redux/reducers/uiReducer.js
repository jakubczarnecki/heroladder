import {
    ADD_ERROR,
    CLEAR_ERRORS,
    SET_ACC_DELETED,
    SET_LOADING_UI,
    STOP_LOADING_UI,
} from "../types"

const initialState = {
    loading: false,
    successfullyDeletedAcc: false,
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
        case SET_ACC_DELETED:
            return {
                ...state,
                successfullyDeletedAcc: true,
            }
        default:
            return state
    }
}

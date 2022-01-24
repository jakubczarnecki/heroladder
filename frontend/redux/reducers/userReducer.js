import {
    SET_UNAUTHENTICATED,
    SET_USER,
    UPDATE_USER,
    UPDATE_USERNAME,
} from "../types"

const initialState = {
    id: "",
    username: "",
    email: "",
    avatar: "",
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

        case UPDATE_USER: {
            return {
                ...state,
                ...action.payload,
            }
        }

        case UPDATE_USERNAME: {
            return {
                ...state,
                username: action.payload,
            }
        }

        default:
            return state
    }
}

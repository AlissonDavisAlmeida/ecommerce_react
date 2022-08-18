import { Action, USER_ACTION_TYPES } from "./user_types"


const initialState = {
    user: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: Action) => {

    switch (action.type) {

        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, user: action.payload }
        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
            return { ...state, error: action.payload }
        case USER_ACTION_TYPES.SIGN_UP_FAILURE:
            return { ...state, error: action.payload }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, user: null }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, user: null }    
        default:
            return state
    }
}
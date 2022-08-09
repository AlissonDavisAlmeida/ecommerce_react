import { AnyAction } from "redux"
import { USER_ACTION_TYPES } from "./user_types"


const initialState = {
    user: null
}

export const userReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {

        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}
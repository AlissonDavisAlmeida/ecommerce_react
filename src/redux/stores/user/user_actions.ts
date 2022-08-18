import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user_types";

export const setCurrentUser = (user: User) => {
    return {
        type: USER_ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    }
}

export const checkUserSession = () => {
    return {
        type: USER_ACTION_TYPES.CHECK_USER_SESSION
    }
}


export const googleSignInStart = () => {
    return {
        type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
    }
}

export const emailSignInStart = (email: string, password: string) => {
    return {
        type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
        payload: {
            email,
            password
        }
    }
}

export const signInSuccess = (user: User) => {
    return {
        type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: user
    }
}

export const signInFailure = (error: string) => {
    return {
        type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
        payload: error
    }
}

export const signupStart = (email: string, password: string) => {
    return {
        type: USER_ACTION_TYPES.SGIN_UP_START,
        payload: {
            email,
            password
        }
    }
}

export const signupSuccess = ({ user, additionalDetails }: { user: User, additionalDetails: any }) => {
    return {
        type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
        payload: {
            user,
            additionalDetails
        }
    }
}

export const signupFailure = (error: string) => {
    return {
        type: USER_ACTION_TYPES.SIGN_UP_FAILURE,
        payload: error
    }
}

export const signOutStart = () => {
    return {
        type: USER_ACTION_TYPES.SIGN_OUT_START
    }
}

export const signOutSuccess = () => {
    return {
        type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
    }
}

export const signOutFailure = (error: string) => {
    return {
        type: USER_ACTION_TYPES.SIGN_OUT_FAILURE,
        payload: error
    }
}
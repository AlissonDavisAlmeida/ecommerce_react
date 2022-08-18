import { User } from "firebase/auth";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
    createUser,
    createUserDocumentFromAuth,
    getCurrentUser, signInWithEmail,
    signInWithGooglePopUp,
    logout
} from "../../../utils/firebase/firebase_utils";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signupFailure, signupSuccess } from "./user_actions";
import { USER_ACTION_TYPES } from "./user_types";


function* getSnapshotFromUserauth(userAuth: User, additionalDetails?: any): any {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error: any) {
        yield put(signInFailure(error.message))
    }
}

function* checkUserSession(): any {
    try {
        const user = yield call(getCurrentUser)

        if (!user) return
        yield call(getSnapshotFromUserauth, user)

    } catch (error: any) {
        yield put(signInFailure(error.message))
    }
}

function* signinWithGoogle() {

    try {
        const { user } = yield call(signInWithGooglePopUp)
        yield call(getSnapshotFromUserauth, user)
    } catch (error: any) {
        yield put(signInFailure(error.message))
    }
}

function* signinWithEmail(action: any) {
    try {
        const { email, password } = action.payload;
        const { user } = yield call(signInWithEmail, email, password)
        yield call(getSnapshotFromUserauth, user)
    } catch (err: any) {
        yield put(signInFailure(err.message))
    }
}

function* signinAfterSignup({ payload: { user, additionalDetails } }: any) {

    yield call(getSnapshotFromUserauth, user, additionalDetails);
}

function* signinUp(action: any) {
    try {
        const { user } = yield call(createUser, action.email, action.password)
        yield put(signupSuccess({ user, additionalDetails: user.displayName }))
    } catch (err: any) {
        yield put(signupFailure(err.message))
    }
}


function* signinOut() {
    try {

        yield call(logout)

        yield put(signOutSuccess())
    } catch (error: any) {
        yield put(signOutFailure(error.message))
    }
}



function* onLogin() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, checkUserSession);
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signinWithGoogle);
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signinWithEmail);
    yield takeLatest(USER_ACTION_TYPES.SGIN_UP_START, signinUp);
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signinAfterSignup);
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signinOut);
}

export function* userSagas() {
    yield all([
        call(onLogin)
    ]);
}
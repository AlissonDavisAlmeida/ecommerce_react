import { User } from "firebase/auth";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { createUserDocumentFromAuth, getCurrentUser } from "../../../utils/firebase/firebase_utils";
import { signInFailure, signInSuccess } from "./user_actions";
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


function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, checkUserSession);
}

export function* userSagas() {
    yield all([
        onCheckUserSession()
    ]);
}
import {call, all} from "redux-saga/effects"
import { categoriesSaga } from "../stores/category/category.saga"
import { userSagas } from "../stores/user/user.saga"



export function* rootSaga(){
    yield all([
        call (categoriesSaga),
        call (userSagas)
    ])
}
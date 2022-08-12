import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase_utils";
import { fetchCategoriesError, fetchCategoriesSuccess } from "./category_actions";
import { CategoryActionTypes } from "./category_types";


export function* fetchCategoriesAsync(): any {

    try {
        const categories = yield call(getCategoriesAndDocuments);

        console.log(categories);
        yield put(fetchCategoriesSuccess(categories))
    } catch (err: any) {
        yield put(fetchCategoriesError(err.message))
    }
}

export function* onFetchCategories() {

    yield takeLatest(CategoryActionTypes.FET_CATEGORIES_START, fetchCategoriesAsync)
}


export function* categoriesSaga() {
    yield all([
        call(onFetchCategories)
    ])
}
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./stores";
import createSaga from "redux-saga";
// import thunk from "redux-thunk";
import { rootSaga } from "./sagas/rootSaga";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
}

const sagaMiddleware = createSaga();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware].filter(Boolean);

//@ts-ignore
const composeEnh = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnh(applyMiddleware(...middlewares as any[]))

export const store = createStore(persistedReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)
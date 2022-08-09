import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./stores";
import thunk from "redux-thunk";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [/* process.env.NODE_ENV === "development" && loggerMiddleware,  */thunk].filter(Boolean);

//@ts-ignore
const composeEnh = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnh(applyMiddleware(...middlewares as any[]))

export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store)
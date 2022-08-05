import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middleware/logger";
import { rootReducer } from "./stores";



const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV === "development" && loggerMiddleware].filter(Boolean);

//@ts-ignore
const composeEnh = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnh(applyMiddleware(...middlewares as any[]))

export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store)
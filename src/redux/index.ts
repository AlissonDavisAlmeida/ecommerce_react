import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./stores";

const loggerMiddleware = (store:any) => (next:any) => (action:any) =>{
    if(!action.type){
        return next(action);
    }

    console.log(action.type, action.payload);

    return next(action);
}

const middlewares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, composedEnhancers);
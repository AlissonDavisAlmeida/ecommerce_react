export const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
    if (!action.type) {
        return next(action);
    }

    console.log(action.type, action.payload);

    return next(action);
}
const HomeState = {
}

export const actionCreators = {
}

export const reducer = (state, imcomingAction) => {
    if(state === undefined) {
        return HomeState;
    }

    const action = imcomingAction;
    switch(action.type) {
        default:
            return state;
    }
}
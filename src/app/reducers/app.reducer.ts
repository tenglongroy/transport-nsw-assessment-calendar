import * as appActions from '../actions/app.actions';

export function appReducer(state = { app_loading: false }, action: appActions.Action) {
    switch (action.type) {
        case appActions.APP_LOADING: {
            return Object.assign({}, state, { app_loading: true });
        }
        case appActions.APP_LOADING_FINISHED: {
            return Object.assign({}, state, { app_loading: false });
        }
    }
}

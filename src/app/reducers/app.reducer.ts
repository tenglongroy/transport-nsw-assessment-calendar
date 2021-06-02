import * as appActions from '../actions/app.actions';

export function appReducer(state = null, action: appActions.Action) {
    switch (action.type) {
        case appActions.APP_LOADING: {
            return Object.assign({}, state, { loading: true });
        }
        case appActions.APP_LOADING_FINISHED: {
            return Object.assign({}, state, { loading: false });
        }
    }
}

import * as infoActions from '../actions/info.actions';

export function infoReducer(state = null, action: infoActions.Action) {
    switch (action.type) {
        case infoActions.GET_INFO_SUCCESS: {
            return state;
        }
        case infoActions.GET_INFO_FAIL: {
            return state;
        }
    }
}

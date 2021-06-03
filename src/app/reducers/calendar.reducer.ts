import * as calendarActions from '../actions/calendar.actions';

export function calendarReducer(state = { app_loading: false }, action: calendarActions.Action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

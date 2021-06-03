export const APP_LOADING = 'APP_LOADING';
export const APP_LOADING_FINISHED = 'APP_LOADING_FINISHED';

export const CALENDAR_LOADING = 'CALENDAR_LOADING';
export const CALENDAR_LOADING_FINISHED = 'CALENDAR_LOADING_FINISHED';

export const APP_LOADING_ERROR = 'APP_LOADING_ERROR';


export class AppLoadingAction {
    readonly type = APP_LOADING;
    constructor(){}
}
export class AppLoadingFinishAction {
    readonly type = APP_LOADING_FINISHED;
    constructor(){}
}

export class CalendarLoadingAction {
    readonly type = CALENDAR_LOADING;
    constructor(){}
}
export class CalendarLoadingFinishAction {
    readonly type = CALENDAR_LOADING_FINISHED;
    constructor(){}
}

export class AppLoadingErrorAction {
    readonly type = APP_LOADING_ERROR;
    constructor(public payload: any){}
}


export type Action
  = AppLoadingAction
  | AppLoadingFinishAction
  
  | CalendarLoadingAction
  | CalendarLoadingFinishAction
  
  | AppLoadingErrorAction;

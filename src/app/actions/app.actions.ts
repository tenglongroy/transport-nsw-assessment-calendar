export const APP_LOADING = 'APP_LOADING';
export const APP_LOADING_FINISHED = 'APP_LOADING_FINISHED';


export class AppLoadingAction {
    readonly type = APP_LOADING;
    constructor(){}
}

export class AppLoadingFinishAction {
    readonly type = APP_LOADING_FINISHED;
    constructor(){}
}


export type Action
  = AppLoadingAction
  | AppLoadingFinishAction;

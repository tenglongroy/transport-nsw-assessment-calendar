export const FETCH_EXTERNAL_INFO = 'FETCH_EXTERNAL_INFO';
export const FETCH_EXTERNAL_INFO_SUCCESS = 'FETCH_EXTERNAL_INFO_SUCCESS';
export const FETCH_EXTERNAL_INFO_FAIL = 'FETCH_EXTERNAL_INFO_FAIL';

export const GET_STORE_INFO = 'GET_STORE_INFO';
export const GET_STORE_INFO_SUCCESS = 'GET_STORE_INFO_SUCCESS';
export const GET_STORE_INFO_FAIL = 'GET_STORE_INFO_FAIL';

export const SELECT_MONTH = 'SELECT_MONTH';
export const UPDATE_CURRENT_MONTH = 'UPDATE_CURRENT_MONTH';


// effects
export class FetchExternalInfoAction {
    readonly type = FETCH_EXTERNAL_INFO;
    constructor(public payload: any){}
}
export class FetchExternalInfoSuccessAction {
    readonly type = FETCH_EXTERNAL_INFO_SUCCESS;
    constructor(public payload: any){}
}
export class FetchExternalInfoFailAction {
    readonly type = FETCH_EXTERNAL_INFO_FAIL;
    constructor(){}
}

// effects
export class GetStoreInfoAction {
    readonly type = GET_STORE_INFO;
    constructor(public payload: any){}
}
export class GetStoreInfoSuccessAction {
    readonly type = GET_STORE_INFO_SUCCESS;
    constructor(public payload: any){}
}
export class GetStoreInfoFailAction {
    readonly type = GET_STORE_INFO_FAIL;
    constructor(){}
}

// effects
export class SelectMonthAction {
    readonly type = SELECT_MONTH;
    constructor(public payload: any){}
}
export class UpdateCurrentMonthAction {
    readonly type = UPDATE_CURRENT_MONTH;
    constructor(public payload: any){}
}


export type Action
  = FetchExternalInfoAction
  | FetchExternalInfoSuccessAction
  | FetchExternalInfoFailAction

  | GetStoreInfoAction
  | GetStoreInfoSuccessAction
  | GetStoreInfoFailAction
  
  | SelectMonthAction
  | UpdateCurrentMonthAction;

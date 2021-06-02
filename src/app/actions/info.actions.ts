export const GET_INFO = 'GET_INFO';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAIL = 'GET_INFO_FAIL';


export class GetInfoAction {
    readonly type = GET_INFO;
    constructor(){}
}
export class GetInfoSuccessAction {
    readonly type = GET_INFO_SUCCESS;
    constructor(public payload: any){}
}
export class GetInfoFailAction {
    readonly type = GET_INFO_FAIL;
    constructor(){}
}


export type Action
  = GetInfoAction
  | GetInfoSuccessAction
  | GetInfoFailAction;

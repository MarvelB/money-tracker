export enum AuthActionType {
    LOGIN = "LOGIN"
}

export interface AuthAction {
    type: AuthActionType;
    payload: any;
}
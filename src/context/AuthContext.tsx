import { createContext, useReducer } from "react";
import { AuthContextModel } from "types";
import { AuthAction, AuthActionType } from "types/auth-actions.model";

const initialState: AuthContextModel = {
    user: null,
    dispatch: () => {}
}

export const AuthContext = createContext<AuthContextModel>(initialState);

export const authReducer = (state: AuthContextModel, action: AuthAction) => {
    let newState = {...state};

    switch (action.type) {
        case AuthActionType.LOGIN:
            newState = { ...newState, user: action.payload }
            break;
    }

    return newState;
}

interface AuthContextProviderProps {
    children: JSX.Element[] | JSX.Element;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ ...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    );
}
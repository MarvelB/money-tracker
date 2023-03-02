import { projectAuth } from "firebase/config";
import { useState } from "react";
import { AuthActionType } from "types/auth-actions.model";
import { useAuthContext } from "./useAuthContext";

export interface UseLogoutType {
    logout:  () => Promise<void>;
    isLoading: boolean;
    error: string;
}

export const useLogout = (): UseLogoutType => {
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError("");
        setIsLoading(true);

        // Signing user out
        try {
            await projectAuth.signOut();

            dispatch({type: AuthActionType.LOGOUT, payload: null});

            setError("");
            setIsLoading(false);
        } catch (err: any) {
            console.log(err.message);
            setError(err.message);
            setIsLoading(false);
        }
    }

    return { error, isLoading, logout }
}
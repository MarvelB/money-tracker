import { projectAuth } from "firebase/config";
import { useState } from "react";
import { AuthActionType } from "types/auth-actions.model";
import { UseAuthContext } from "./useAuthContext";

export interface UseSignUpType {
    signup:  (email: string, password: string, displayName: string) => Promise<void>;
    isLoading: boolean;
    error: string;
}

const useSignup = (): UseSignUpType => {
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = UseAuthContext();

    const signup = async (email: string, password: string, displayName: string) => {
        setError("");
        setIsLoading(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);

            if (!res) {
                throw new Error("Could not complete signup");
            }

            // Adding displayName to user

            await res.user?.updateProfile({displayName});

            // Dispatching login action
            dispatch({ type: AuthActionType.LOGIN, payload: res.user });

            setError("");
            setIsLoading(false);

        } catch (err: any) {
            console.log(err.message);
            setError(err.message);
            setIsLoading(false);
        }
    }

    return { error, isLoading, signup }
}

export default useSignup;
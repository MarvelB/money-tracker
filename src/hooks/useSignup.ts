import { projectAuth } from "firebase/config";
import { useState } from "react";

export interface UseSignUpType {
    signup:  (email: string, password: string, displayName: string) => Promise<void>;
    isLoading: boolean;
    error: string;
}

const useSignup = (): UseSignUpType => {
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signup = async (email: string, password: string, displayName: string) => {
        setError("");
        setIsLoading(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);

            console.log(res.user);

            if (!res) {
                throw new Error("Could not complete signup");
            }

            // Adding displayName to user

            await res.user?.updateProfile({displayName});

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
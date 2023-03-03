import { projectFirestore } from "firebase/config";
import { useEffect, useReducer, useState } from "react";
import { UseFirestoreState } from "types/use-firestore-state.model";

const enum UseFirestoreActionType {
    ONE = "1"
}

interface UseFirestoreAction {
    type: UseFirestoreActionType;
    payload: any;
}

const initialState: UseFirestoreState = {
    document: null,
    error: "",
    success: null,
    isLoading: false
}

const firestoreReducer = (state: UseFirestoreState, action: UseFirestoreAction) => {
    let newState = {...state};

    switch(action.type) {
        // 
    }

    return newState;
}

export interface UseFirestoreType<T> {
    addDocument: (document: T) => void;
    deleteDocument: (id: string) => void;
    response: UseFirestoreState;
}

export const useFirestore = <T>(collection: string): UseFirestoreType<T> => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState<boolean>(false);

    // collection ref
    const ref = projectFirestore.collection(collection);

    const addDocument = (document: T) => {}

    const deleteDocument = (id: string) => {}

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { addDocument, deleteDocument, response }
}
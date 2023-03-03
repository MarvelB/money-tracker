import firebase from "firebase/app"
import { projectFirestore } from "firebase/config";
import { useEffect, useReducer, useState } from "react";
import { UseFirestoreState } from "types/use-firestore-state.model";

const enum UseFirestoreActionType {
    IS_LOADING = "IS_LOADING",
    DOCUMENT_ADDED = "DOCUMENT_ADDED",
    ERROR = "ERROR",
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
        case UseFirestoreActionType.IS_LOADING:
            newState = {document: null, error: "", success: false,isLoading: true};
            break;
        case UseFirestoreActionType.DOCUMENT_ADDED:
            newState = {isLoading: false, document: action.payload, success: true, error: ""};
            break;
        case UseFirestoreActionType.ERROR:
            newState = {isLoading: false, success: false, error: action.payload, document: null};
    }

    return newState;
}

export interface UseFirestoreType<T> {
    addDocument: (document: T) => Promise<void>;
    deleteDocument: (id: string) => Promise<void>;
    response: UseFirestoreState;
}

export const useFirestore = <T>(collection: string): UseFirestoreType<T> => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState<boolean>(false);

    // collection ref
    const ref = projectFirestore.collection(collection);

    const dispatchIfNotCancelled = (action: UseFirestoreAction) => {
        if (!isCancelled) {
            dispatch(action);
        }
    }

    const addDocument = async (document: T) => {
        dispatch({type: UseFirestoreActionType.IS_LOADING, payload: null});

        try {
            const addedDocument = await ref.add(document as firebase.firestore.DocumentData);

            dispatchIfNotCancelled({type: UseFirestoreActionType.DOCUMENT_ADDED, payload: addedDocument});
            
        } catch (err: any) {
            dispatchIfNotCancelled({type: UseFirestoreActionType.ERROR, payload: err.message});
        }
    }

    const deleteDocument = async (id: string) => {}

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { addDocument, deleteDocument, response }
}
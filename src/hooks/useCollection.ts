import firebase from "firebase/app";
import { projectFirestore } from "firebase/config";
import { useEffect, useRef, useState } from "react";

export interface UseCollectionType<T> {
    documents: T[];
    error: string;
}

export const useCollection = <T>(
    collection: string, 
    _query?: [string | firebase.firestore.FieldPath, firebase.firestore.WhereFilterOp, any]
): UseCollectionType<T> => {

    const [documents, setDocuments] = useState<T[]>([]);
    const [error, setError] = useState<string>("");

    // Next line is necessary otherwise this hook will enter an infinte loop
    const query = useRef(_query).current;

    useEffect(() => {
        let ref: firebase.firestore.Query<firebase.firestore.DocumentData> = projectFirestore.collection(collection);

        if (query) {
            ref = ref.where(...query);
        }

        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results: T[] = [];

            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id} as T);
            });

            setDocuments(results);
            setError("");
        }, (err) => {
            console.log(err);
            setError("Could not fetch the data");
        });

        // Cleanup function
        return () => unsubscribe();

    }, [collection, query]);

    return { documents, error }
}
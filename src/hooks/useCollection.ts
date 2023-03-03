import { projectFirestore } from "firebase/config";
import { useEffect, useState } from "react"

export interface UseCollectionType<T> {
    documents: T[];
    error: string;
}

export const useCollection = <T>(collection: string): UseCollectionType<T> => {

    const [documents, setDocuments] = useState<T[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        let ref = projectFirestore.collection(collection);

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

    }, [collection]);

    return { documents, error }
}
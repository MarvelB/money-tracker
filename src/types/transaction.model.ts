import firebase from "firebase/app"

export interface TransactionModel {
    name: string;
    amount: string;
    createdAt: firebase.firestore.Timestamp;
}
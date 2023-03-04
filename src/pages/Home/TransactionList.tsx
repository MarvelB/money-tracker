import { useFirestore } from "hooks/useFirestore";
import { TransactionModel, WithID } from "types";

// @ts-ignore: Cannot find css module
import styles from './Home.module.css';

interface TransactionListProps {
    transactions: WithID<TransactionModel>[]
}

const TransactionList = ({ transactions }: TransactionListProps) => {

    const { deleteDocument, response } = useFirestore("transactions");

    return (
        <ul className={styles.transactions}>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    <p className={styles.name}>{transaction.name}</p>
                    <p className={styles.amount}>${transaction.amount}</p>
                    <button onClick={() => deleteDocument(transaction.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default TransactionList;
import { timestamp } from "firebase/config";
import { useFirestore } from "hooks/useFirestore";
import { useEffect, useState } from "react";
import { TransactionModel } from "types";

interface TransactionsFormProps {
    ownerId: string;
}

const TransactionsForm = ({ ownerId }: TransactionsFormProps) => {

    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    const { addDocument, response } = useFirestore<TransactionModel>("transactions");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addDocument({ name, amount, createdAt: timestamp.fromDate(new Date()), ownerId });
    }

    useEffect(() => {
        if (response.success) {
            setName("");
            setAmount("");
        }
    }, [response.success]);

    return (
        <>
            <h3>Add Transaction</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    <span>Transaction name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        value={name}
                    />
                </label>

                <label>
                    <span>Transaction amount ($):</span>
                    <input
                        type="number"
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>

                <button>Add transaction</button>

            </form>
        </>
    );
}

export default TransactionsForm;
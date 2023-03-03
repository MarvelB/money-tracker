import { useState } from "react";

interface TransactionsFormProps {}

const TransactionsForm = ({ }: TransactionsFormProps) => {

    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log({ name, amount });
    }

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
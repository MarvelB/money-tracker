import { useAuthContext } from 'hooks/useAuthContext';
import TransactionsForm from './TransactionsForm';

// @ts-ignore: Cannot find css module
import styles from './Home.module.css';
import { useCollection } from 'hooks/useCollection';
import { TransactionModel, WithID } from 'types';
import TransactionList from './TransactionList';

interface HomeProps {}

const Home = ({ }: HomeProps) => {

  const { user } = useAuthContext();
  const { documents, error } = useCollection<WithID<TransactionModel>>(
    "transactions",
    ["ownerId", "==", user?.uid]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>

      <div className={styles.sidebar}>
        <TransactionsForm ownerId={user?.uid ?? ""} />
      </div>
    </div>
  );
}

export default Home;

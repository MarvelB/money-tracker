import { useAuthContext } from 'hooks/useAuthContext';
import TransactionsForm from './TransactionsForm';

// @ts-ignore: Cannot find css module
import styles from './Home.module.css';

interface HomeProps {}

const Home = ({ }: HomeProps) => {

  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>

      <div className={styles.sidebar}>
        <TransactionsForm ownerId={user?.uid ?? ""} />
      </div>
    </div>
  );
}

export default Home;

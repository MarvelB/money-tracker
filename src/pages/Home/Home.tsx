// @ts-ignore: Cannot find css module
import styles from './Home.module.css';
import TransactionsForm from './TransactionsForm';

interface HomeProps {}

const Home = ({ }: HomeProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>

      <div className={styles.sidebar}>
        <TransactionsForm />
      </div>
    </div>
  );
}

export default Home;

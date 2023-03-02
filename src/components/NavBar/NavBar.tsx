import { Link } from 'react-router-dom';

// @ts-ignore: Cannot find css module
import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar = ({ }: NavBarProps) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Money Tracker</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

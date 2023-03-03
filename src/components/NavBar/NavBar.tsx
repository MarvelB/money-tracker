import { useAuthContext } from 'hooks/useAuthContext';
import { useLogout } from 'hooks/useLogout';
import { Link } from 'react-router-dom';

// @ts-ignore: Cannot find css module
import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar = ({ }: NavBarProps) => {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Money Tracker</li>
        
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={() => logout()}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;

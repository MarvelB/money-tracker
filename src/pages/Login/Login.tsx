import { useLogIn } from 'hooks/useLogIn';
import { useState } from 'react';

// @ts-ignore: Cannot find css module
import styles from './Login.module.css';

interface LoginProps {}

const Login = ({ }: LoginProps) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { error, login, isLoading } = useLogIn();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(email, password);
  }

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button
        className="btn"
        disabled={isLoading}
      >{isLoading ? "Loading" : "Login"}</button>

      {error && <p>{error}</p>}

    </form>
  );
}

export default Login;

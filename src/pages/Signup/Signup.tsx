import { useState } from 'react';

// @ts-ignore: Cannot find css module
import styles from './Signup.module.css';

interface SignupProps {}

const Signup = ({ }: SignupProps) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password, displayName);
  }
  
  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>Display name:</span>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <button className="btn">Signup</button>

    </form>
  );
}

export default Signup;

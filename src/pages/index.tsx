import Head from "next/head";
import { useState } from "react";
import useUserStore from "../stores/user";
import { useAuthContext } from "../contexts/AuthContext";
import { ErrorHandler } from "../services/errors/ErrorHandler";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleUserSignIn } = useAuthContext();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === '' && password === '') return;

    handleUserSignIn({ email, password });
  
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Head>
        <title>Tickets - Sign In</title>
      </Head>

      <div>
        <form onSubmit={onSubmit}>
          <input type="email" value={email} onChange={(text) => setEmail(text.target.value)} />
          <input type="password" value={password} onChange={(text) => setPassword(text.target.value)} />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
}

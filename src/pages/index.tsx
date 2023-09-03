import Head from "next/head";
import { useState } from "react";
import useUserStore from "../stores/user";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = useUserStore(state => state.addUser);
  const users = useUserStore(state => state.users);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addUser({ name, email });

    setName('');
    setEmail('');
  };
  
  return (
    <>
      <Head>
        <title>Tickets - Sign In</title>
      </Head>

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={name} onChange={(text) => setName(text.target.value)} />
          <input type="text" value={email} onChange={(text) => setEmail(text.target.value)} />
          <button type="submit">Create User</button>
        </form>

        {users.length === 0 && <h3>No users found yet</h3>}
        {users?.map(user => <p key={Math.random()}>{user.name} | {user.email}</p>)}
      </div>
    </>
  );
}

import Navbar from './components/Navbar';
import { use } from 'react';

async function getUsers() {
  // const res = await fetch('http://localhost:3000/api/users');
  // if (!res.ok) {
  //   throw new Error('Failed to fetch users');
  // }
  // return res.json();
}

export default function Home() {
  const users = use(getUsers());

  return (
    <main>
      <Navbar />
      <ul>
        {/* {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))} */}
      </ul>
    </main>
  );
}
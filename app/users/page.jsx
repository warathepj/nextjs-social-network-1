// app/users/page.jsx


import dbConnect from '@/lib/db';
import User from '@/models/User';

async function getUsers() {
  await dbConnect();
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users');
  }
}

export default async function UsersPage() {
//wait app/users/page.jsx
  const users = await getUsers();
// render loading...
  if (!users) {
    return <div>Loading...</div>;
  }
// render data
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <div>
          <li key={user._id}>{user.name}</li>
          <li key={user._id}>{user.email}</li>
          <li key={user._id}>{user.password}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

//////////////////////
// "use client"
// import { useState } from 'react';

// import dbConnect from '@/lib/dbB';
// import User from '@/models/UserB';

// async function createUser(name) {
//   await dbConnect();
//   try {
//     const newUser = new User({ name });
//     await newUser.save();
//     return newUser;
//   } catch (error) {
//     console.error('Failed to create user:', error);
//     throw new Error('Failed to create user');
//   }
// }

// async function getUsers() {
//   await dbConnect();
//   try {
//     const users = await User.find({});
//     return users;
//   } catch (error) {
//     console.error('Failed to fetch users:', error);
//     throw new Error('Failed to fetch users');
//   }
// }

// export default async function UsersPage() {
  // const [name, setName] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (name.trim()) {
  //     await createUser(name.trim());
  //     setName('');
  //   }
  // };

  // const users = await getUsers();

  // return (
  //   <div>
  //     <h1>Users</h1>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
        <button type="submit">Create User</button>
      </form> */}
      // <ul>
      //   {users.map((user) => (
      //     <li key={user._id}>
      //       {user.name}
            {/* {user.name} - Created at: {user.createdAt.toLocaleString()} */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
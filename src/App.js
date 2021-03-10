import React from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'NaDaPuPu',
      email: 'jun19998@gmail.com'
    },
    {
      id: 2,
      username: 'VKSEED',
      email: 'seed@example.com'
    },
    {
      id: 3,
      username: 'Depthfirst',
      email: 'osj@example.com'
    }
  ];

  return <UserList users={users} />;
}

export default App;
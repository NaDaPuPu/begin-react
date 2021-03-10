import React, { useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

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

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현할 배열에 항목 추가하는 로직

    nextId.current += 1;
  }

  return (
    <>
      <CreateUser />
      <UserList users={users} />
    </>
  );
}

export default App;
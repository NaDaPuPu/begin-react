import React, { useState, useRef } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setinputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  
  const onChange = e => {
    const { name, value } = e.target;
    setinputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    setUsers(users.concat(user));

    setinputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
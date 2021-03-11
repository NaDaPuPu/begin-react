import React, { useState, useRef, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

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
      email: 'jun19998@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'VKSEED',
      email: 'seed@example.com',
      active: false
    },
    {
      id: 3,
      username: 'Depthfirst',
      email: 'osj@example.com',
      active: false
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
  };

  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // = user.id가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user // user.id가 id와 같을 경우, 해당 user의 active를 변경한 배열 호출. 아닐 경우, user 배열 호출
      )
    );
  }

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
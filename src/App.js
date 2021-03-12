import React, { useReducer, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
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
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      // return {
      //   users: state.users.concat(action.user)
      // };
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id ? {...user, active: !user.active } : user
      //   )
      // };
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id); // find() : 조건에 맞는 요소 출력
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // };
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id); // findIndex() : 조건에 맞는 요소의 인덱스 출력
        draft.users.splice(index, 1); // 인덱스가 index인 요소를 1개 삭제
      });
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser/>
      <UserList users={users}/>
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
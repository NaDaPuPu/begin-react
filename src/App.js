import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    // JSX에서 style을 설정할 때 camelCase를 사용한다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    // <> : React fragment (key가 없을 때) : 두 개 이상의 태그는 꼭 하나의 태그로 감싸져있어야 한다. -> div 대신 사용(불필요한 출력 방지)
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}

export default App;
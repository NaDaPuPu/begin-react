import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    // JSX에서 style을 설정할 때 camelCase를 사용한다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return (
    // <> : React fragment (key가 없을 때) : 두 개 이상의 태그는 꼭 하나의 태그로 감싸져있어야 한다. -> div 대신 사용(불필요한 출력 방지)
    <>
      {/* 주석은 화면에 보이지 않습니다. */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다. */
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
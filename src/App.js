import React from 'react';
import Hello from './Hello';

function App() {
  return (
    // <> : React fragment (key가 없을 때) : 두 개 이상의 태그는 꼭 하나의 태그로 감싸져있어야 한다. -> div 대신 사용(불필요한 출력 방지)
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

export default App;
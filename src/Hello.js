import React from 'react';

function Hello(props) {
    return <div style={{ color : props.color }}>안녕하세요! {props.name}</div> // 왜 중괄호 두 번 사용?
}

export default Hello;
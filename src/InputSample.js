import React, { useState, useRef } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({ // useState에 객체 형식의 상태를 전달
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통한 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // e.target에서 name과 value 추출
        setInputs({
            ...inputs, // 기존의 inputs 객체를 복사
            [name]: value // name과 같은 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                onChange={onChange} 
                value={name} 
                placeholder="이름" 
                ref={nameInput}
            />
            <input 
                name="nickname" 
                onChange={onChange} 
                value={nickname} 
                placeholder="닉네임" 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
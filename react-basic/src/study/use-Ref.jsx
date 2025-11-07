import { useRef } from "react";

// useRef
// useRef 훅(hook)은 함수 컴포넌트에서 ref 라는 속성을 쉽게 사용할 수 있도록 도와주는 도구이다.
// 리액트의 useRef는 컴포넌트 내에서 변하지 않는 값을 유지하거나 DOM 요소에 직접 접근할때 사용하는 훅(Hook) 이다.
// 다른 리액트 Hook 과 목적이 다르다.

// use Ref는 값을 저장하거나 DOM에 접근하기 위해 사용하는 객체(참조값)을 생성하는 Hook
// 저장된 값은 컴포넌트가 리렌더링되어도 유지되며, 값이 바뀌어도 리렌더링을 일으키지 않는다

// ref 속성은 JSX, TSX에서 요소나 컴포넌트에 참조를 연결하는 역할
// App 컴포넌트에서 등록 버튼을 눌렀을 때, 포커스 인풋 태그 쪽으로 넘어가도록 코드를 작성해본다.

function App() {
  const inputElement = useRef(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    // useRef 동작
    inputElement.current.focus();
    fileInputRef.current.click();
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <input type="file" ref={fileInputRef} />
      <button>등록</button>
    </div>
  );
}

export default App;

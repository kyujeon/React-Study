import { useState } from "react";

function App() {
  // useState => Hooks
  // useState는 가장 기본적인 hook 이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  // => 이 함수가 호출되면 배열을 반환한다. / 첫 번째 요소는 상태 값, 두 번째  요소는 상태를 설정하는 함수
  // => use State 함수의 파라미터(매개변수)에는 상태의 기본값을 넣어 준다.

  // 리액트는 상태 값이 변경되면 자동으로 이를 감지해 화면을 다시 렌더링한다.
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <p>
        현재 카운터 값은: <b>{value}</b>
      </p>
      <button onClick={increment}>1 증가</button>
      <button onClick={decrement}>1 감소</button>

      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickName} onChange={onChangeNickname} />
      </div>

      <div>
        <b>이름 : {name}</b>
        <b>닉네임 : {nickName}</b>
      </div>
    </div>
  );
}

export default App;

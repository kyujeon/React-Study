import { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균 값을 계산 중이다.");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

function App() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(""); // input 태그에 입력된 숫자를 list 배열에 주입한다.
  // 상태값 이름을 number로 지정. 단, input 태그에 입력된 값이기 때문에 타입은 string(문자열)이다.

  const onInsert = () => {
    // concat: 배열 합치기 Array 인스턴스의 concat 함수는 두개 이상의 배열을 병합하는데 사용한다.
    // 기존 배열을 변경하지 않고, 새 배열을 반환한다.

    // parseInt: 문자열 인자를 파싱하여 특정 진수(수의 진법에서 기준이 되는 값)의 정수를 반환한다.
    const newList = list.concat(parseInt(number));
    setList(newList); // number[]
    setNumber(""); // number 값 초기화
  };

  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={onInsert}> 등록 </button>

      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item};</li>;
        })}
      </ul>

      <div>
        <b>평균 값: {average}</b>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

const Ex06 = () => {
  const [num, setNum] = useState(0);
  //   =>리액트 상태관리 hook
  //   =>배열 비구조화 할당을 통하여 사용하며 반드시 import 해서 사용
  //   =>const [변수명, set변수명] = useState(초기화 값);

  const onPlus = () => {
    setNum(num + 1);
    // =>useState에 정의된 변수값을 변경할때 사용
    // =>set변수명(변경할 값);
  };

  //   const onMinus = () => setNum(num - 1);

  return (
    <div>
      <h3>클릭할때 숫자 증가</h3>
      <p>{num}</p>
      <button onClick={onPlus}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default Ex06;

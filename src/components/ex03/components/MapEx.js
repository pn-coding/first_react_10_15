import { Fragment } from "react";
import { MapEx02 } from "./MapEx02";

const arr = [1, 2, 3, 4, 5];

export const MapEx = () => {
  return (
    <div>
      {/* {arr.map((num) => (
        <Fragment key={num}>{num}</Fragment>
      ))} */}
      <MapEx02 />
    </div>
  );
};

// *map()
// =>배열만 사용할수 있음
// =>기존배열을 복사하여 배열안의 요소를 새로운 값으로 반환시킴
// =>map을 사용할땐 반드시 key를 사용해야되며 값은 고유값으로 적용할것

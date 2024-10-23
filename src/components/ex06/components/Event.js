import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$color};
`;

const Event = () => {
  const [bgColor, setBgColor] = useState("gold");
  const [on, setOn] = useState(true);

  const onClickBox = () => {
    if (on) {
      setBgColor("cornflowerblue");
      setOn(false);
    } else if (!on) {
      setBgColor("gold");
      setOn(true);
    }
    console.log(on);
  };

  return (
    <div>
      <Box $color={bgColor} onClick={onClickBox}></Box>
    </div>
  );
};

export default Event;

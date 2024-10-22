import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 50%;
`;

const InBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightsalmon;
`;

const BoxAni = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightpink;
  div {
    width: 100px;
    height: 100px;
    background-color: hotpink;
  }
  &:hover div {
    background-color: deeppink;
  }
  animation: ${BoxAni} 1s infinite;
`;

const Ex04 = () => {
  return (
    <div>
      <Box $bgColor="salmon">
        <InBox></InBox>
      </Box>

      <Box $bgColor="lightsalmon"></Box>

      <Con>
        <div></div>
      </Con>
    </div>
  );
};

export default Ex04;

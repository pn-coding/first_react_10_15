import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 80px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;

  h2 {
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    letter-spacing: -2px;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    /* &::placeholder {
      color: red;
    } */
  }

  p {
    font-size: 14px;
    color: crimson;
    margin-top: 3px;
  }
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: cornflowerblue;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: white;
  font-weight: 500;
  cursor: ${(props) => (props.$isPointer ? "pointer" : "default")};
  opacity: ${(props) => props.$isActive};
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const nav = useNavigate();
  //   =>페이지 이동할때 사용함

  const signupSubmit = (data) => {
    alert(`${data.username}님 회원가입 되었습니다 로그인해주세요`);
    nav("/login");
  };

  // console.log(isValid);

  return (
    <Container>
      <Form onSubmit={handleSubmit(signupSubmit)}>
        <h2>회원가입</h2>

        <input
          {...register("username", {
            required: "아이디는 필수 입니다",
            minLength: {
              value: 2,
              message: "아이디는 두자리 이상으로 하세요.",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.username?.message}</p>

        <input
          {...register("이메일", {
            required: false,
          })}
          type="text"
          placeholder="이메일"
        />

        <input
          {...register("이름", {
            required: false,
          })}
          type="text"
          placeholder="이름"
        />

        <input
          {...register("password", {
            required: "패스워드는 필수 입니다",
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.password?.message}</p>

        <Button $isPointer={isValid} $isActive={isValid ? "1" : "0.5"}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;

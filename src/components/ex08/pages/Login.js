import { useForm } from "react-hook-form";
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
  };

  // console.log(isValid);

  return (
    <Container>
      <Form onSubmit={handleSubmit(loginSubmit)}>
        <h2>로그인</h2>

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
        {/* *옵셔널 체이닝(?.)
        객체 속성의 유무에 따라 undefinded로 반환이 아닌 값이 있으면 값을 반환하고
        없으면 빈값으로 반환함 */}

        <input
          {...register("password", {
            required: "패스워드는 필수 입니다",
            // pattern: {
            //   value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
            //   message: "영문 숫자 특수기호 조합 8자리 이상",
            // },
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.password?.message}</p>

        <Button $isPointer={isValid} $isActive={isValid ? "1" : "0.5"}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

// *useForm()
// const {register, handleSubmit, formState:{errors, isValid}} = useForm();
// =>register: input 태그 관리 해줌
// =>handleSubmit: form 이벤트 관리
// =>formState: 폼 상태관리,
// errors: 에러 관리
// isValid: 유효성 판단후 boolean값으로 반환함
// =>handleSubmit 내부 커스텀 함수 첫번째 매개변수는
// input의 value값을 객체로 저장하여 반환함

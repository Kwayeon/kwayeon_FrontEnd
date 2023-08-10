import { useFormik } from "formik";

import { useMsgMutation } from "@/hooks/useMsgMutation";

import { SignInStyled } from "./styled";
import { Button, Input } from "antd";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";

const SignIn = () => {
  const { mutate } = useMsgMutation({
    url: "/auth/local?role=admin",
    method: "post",

    onSuccess(data: any) {
      // todo: set token
    },
  });

  const { mutate: registerTest } = useMsgMutation({
    url: "/user/register",
    method: "POST",
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit(values) {
      mutate(values);
    },
  });

  const onHiddenClick = () => {
    registerTest({
      email: "test",
      password: "test",
      name: "test",
      phone: "test",
      role: "admin",
    });
  };

  return (
    <SignInStyled>
      {/* 로그인 폼 */}
      <form
        className="formWrapper
      "
        onSubmit={loginFormik.handleSubmit}
      >
        {/* 로고 */}
        <div className="logoWrapper">
          <Image src={logo} alt="" className="imgLogo" />
        </div>

        {/* 아이디 */}
        <Input
          className="formInput"
          placeholder="아이디(이메일) 입력"
          name="email"
          onInput={loginFormik.handleChange}
        />

        {/* 비밀번호 */}
        <Input
          className="formInput"
          placeholder="비밀번호 입력"
          type="password"
          name="password"
          onInput={loginFormik.handleChange}
        />

        <Button className="formButton" htmlType="submit">
          로그인
        </Button>

        <Button className="hiddenButton" onClick={() => onHiddenClick()}></Button>
      </form>
    </SignInStyled>
  );
};

export default SignIn;

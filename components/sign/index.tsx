import { useRouter } from "next/router";

import { useFormik } from "formik";

import cookie from "cookiejs";

import { useMsgMutation } from "@/hooks/useMsgMutation";

import { SignInStyled } from "./styled";
import { Button, Input } from "antd";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";

/**
 * 로그인 페이지
 *
 * 최초 작성일: 2023.08.03
 * 최초 작성자: 안선우
 *
 * @returns 로그인 페이지
 */
const SignInForm = () => {
  const router = useRouter();

  // 로그인을 요청하는 함수
  const { mutate: login } = useMsgMutation({
    url: "/auth/login",
    method: "POST",
  });

  const { mutate: registerTest } = useMsgMutation({
    url: "/user/register",
    method: "POST",
  });

  // 로그인 폼
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    /**
     * 로그인 폼의 값을 서버에 전달하고, 토큰을 쿠키에 저장
     *
     * 최초 작성일: 2021.08.10
     * 최초 작성자: 안선우
     *
     * @param values 로그인 폼의 값
     */
    onSubmit(values) {
      login(values, {
        onSuccess: (data) => {
          cookie.set("KwayeonToken", data.data.accessToken);
          router.push("/");
        },
      });
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
      <form className="formWrapper" onSubmit={loginFormik.handleSubmit}>
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

export default SignInForm;

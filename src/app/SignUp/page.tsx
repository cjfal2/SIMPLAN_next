"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { doSignUp } from "../apis/signUp";
import { useRouter } from 'next/navigation'


export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const validateId = () => /^[a-zA-Z0-9]{5,12}$/.test(username);
  const validatePassword = () =>
    /^(?=.*[a-zA-Z])(?=.*\d).{8,15}$/.test(password);
  const validatePasswordMatch = () =>
    password === passwordCheck && passwordCheck !== "";
  const validateNickname = () => /^[a-zA-Z0-9가-힣]{2,6}$/.test(nickname);

  const handleSubmit = async () => {
    if (
      validateId() &&
      validatePassword() &&
      validatePasswordMatch() &&
      validateNickname()
    ) {
      try {
        const signUpResult = await doSignUp(username, password, nickname);

        if (signUpResult === true) {
          // 성공적으로 처리된 경우의 로직
          console.log("회원가입 성공!");
          router.replace("/");
        } else {
          // 오류가 발생한 경우의 로직
          console.error("회원가입 실패");
        }
      } catch (error) {
        // 네트워크 오류 등 비동기 함수 실행 중 에러 발생 시 처리
        console.error("에러 발생:", error);
      }
    } else {
      // 유효성 검사 실패 시 처리
      console.error("입력값이 조건에 맞지 않습니다.");
    }
  };

  return (
    <div className="px-6 flex flex-col gap-2 py-3 w-full h-full justify-center items-center">
      <Image
        src="/images/simplan_logo.png"
        alt="심플랜로고"
        width={200}
        height={200}
        className="rounded-full mb-10"
      />
      <input
        type="text"
        placeholder="ID (5~12자의 영어,숫자)"
        className={`mb-2 p-2 rounded-xl w-[240px] border-2
        ${
          validateId()
            ? "border-check"
            : username
            ? "border-forbiden"
            : "border-none"
        }
        ${validateId() ? "outline-check" : "outline-forbiden"}`}
        minLength={5}
        maxLength={12}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="PASSWORD (8~15자)"
        className={`p-2 rounded-xl w-[240px] border-2
        ${
          validatePassword()
            ? "border-check"
            : password
            ? "border-forbiden"
            : "border-none"
        }
        
        ${validatePassword() ? "outline-check" : "outline-forbiden"}`}
        minLength={8}
        maxLength={15}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="PASSWORD CHECK"
        className={`mb-2 p-2 rounded-xl w-[240px] border-2
        ${
          validatePasswordMatch()
            ? "border-check"
            : passwordCheck
            ? "border-forbiden"
            : "border-none"
        }
        
        ${validatePasswordMatch() ? "outline-check" : "outline-forbiden"}`}
        minLength={8}
        maxLength={15}
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
      />
      <input
        type="text"
        placeholder="NICKNAME (2~6자)"
        className={`mb-2 p-2 rounded-xl w-[240px] border-2
        ${
          validateNickname()
            ? "border-check"
            : nickname
            ? "border-forbiden"
            : "border-none"
        }
        
        ${validateNickname() ? "outline-check" : "outline-forbiden"}`}
        minLength={2}
        maxLength={6}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <div className="h-[10px]"></div>
      <button
        className={`p-2 rounded-xl w-[240px] 
        ${
          validateId() &&
          validatePassword() &&
          validatePasswordMatch() &&
          validateNickname()
            ? "bg-main"
            : "bg-gray"
        }
        ${
          validateId() &&
          validatePassword() &&
          validatePasswordMatch() &&
          validateNickname()
            ? "text-dark"
            : "text-text_dark"
        }
        hover:bg-opacity-80`}
        onClick={handleSubmit}
      >
        회원가입 완료
      </button>
    </div>
  );
}

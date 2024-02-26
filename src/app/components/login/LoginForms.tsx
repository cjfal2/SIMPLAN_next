"use client";

import { doSignIn } from "@/app/apis/signIn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function LoginForms() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const loginStatus = await doSignIn(username, password);
    if (loginStatus !== false) {
      localStorage.setItem("token", loginStatus["accessToken"]);

      router.push("/Today");
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full justify-center items-center">
      <input
        type="text"
        placeholder="ID"
        className="p-2 rounded-xl w-[240px]"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="PASSWORD"
        className="p-2 rounded-xl w-[240px]"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="h-[10px]"></div>
      <button
        className="p-2 rounded-xl w-[240px] bg-sub hover:bg-opacity-80"
        onClick={() => handleSubmit()}
      >
        LOGIN
      </button>
      <Link href={"https://gittgi.site/api/oauth2/authorization/naver"}>
        <button className="p-2 rounded-xl w-[240px] bg-green-400 hover:bg-opacity-80">
          네이버로그인
        </button>
      </Link>
      <Link href={"/SignUp"}>
        <button className="p-2 rounded-xl w-[240px] bg-main hover:bg-opacity-80">
          회원가입
        </button>
      </Link>
    </div>
  );
}

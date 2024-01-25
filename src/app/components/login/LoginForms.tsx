"use client";

import { doSignIn } from "@/app/api/signIn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function LoginForms() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const loginStatus = await doSignIn(username, password);
    if (loginStatus !== false) {
      localStorage.setItem("token", loginStatus["accessToken"]);
    }
  };

  return (
    <div className="px-6 flex flex-col gap-3 w-full h-full justify-center items-center">
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
      <Link href={"/SignUp"}>
        <button className="p-2 rounded-xl w-[240px] bg-main hover:bg-opacity-80">
          회원가입
        </button>
      </Link>
    </div>
  );
}

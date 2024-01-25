'use client'

import Link from "next/link";
import React from "react";
import { useState } from "react";
export default function LoginForms() {
  return (
    <div>
      <input
        type="text"
        placeholder="ID"
        className="p-2 rounded-xl w-[240px]"
      />
      <input
        type="text"
        placeholder="PASSWORD"
        className="p-2 rounded-xl w-[240px]"
      />
      <div className="h-[10px]"></div>
      <button className="p-2 rounded-xl w-[240px] bg-sub hover:bg-opacity-80">
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

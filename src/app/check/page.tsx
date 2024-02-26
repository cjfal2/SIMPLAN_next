'use client'

import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";

export default function CheckPage() {
  useEffect(() => {
    // 쿠키에서 값을 가져오는 함수
    const getCookie = (name: string) => {
      const value: string = `; ${document.cookie}`;
      const parts: string[] = value.split(`; ${name}=`);

      // 쿠키를 찾지 못한 경우
      if (parts.length === 2) {
        return parts.pop()?.split(";").shift();
      } else {
        console.error("쿠키를 찾을 수 없습니다.");
        return undefined;
      }
    };

    // 쿠키에서 저장된 값 가져오기
    const myCookieValue = getCookie("RefreshToken"); // 'myCookieName'은 실제 쿠키의 이름으로 대체되어야 합니다.

    // 쿠키에 저장된 값 콘솔에 출력
    console.log("쿠키에 저장된 값:", myCookieValue);
  }, []);

  return (
    <div className="w-full justify-center items-center flex">
      <Link href={"/"}>처음으로처음으로처음으로처음으로처음으로</Link>
    </div>
  );
}

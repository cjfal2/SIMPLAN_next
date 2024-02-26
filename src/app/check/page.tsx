import Link from "next/link";
import React, { useEffect } from "react";
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export default function CheckPage() {
    let response = NextResponse.next()
    response.cookies.set('RefreshToken', 'false')
    const cookieStore = cookies()
    const theme = cookieStore.get('RefreshToken')
    // 쿠키에 저장된 값 콘솔에 출력
    console.log("쿠키에 저장된 값:", theme);
  
  return (
    <div className="w-full justify-center items-center flex">
      <Link href={"/"}>처음으로처음으로처음으로처음으로처음으로</Link>
    </div>
  );
}

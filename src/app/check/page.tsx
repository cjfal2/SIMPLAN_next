import Link from "next/link";
import React, { useEffect } from "react";
import { cookies } from 'next/headers'


export default function CheckPage() {

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

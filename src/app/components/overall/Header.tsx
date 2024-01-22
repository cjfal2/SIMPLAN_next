import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    // 모바일 상단바 규칙에 따라 48px로 고정
    <div className="h-nav flex justify-between items-center px-2 bg-[#FAC69F]">
      {/* Image 설정값으로 priority를 주어 우선순위가 높은 이미지로 선정 */}
      <Image
        src="/images/simplan_name_2.png"
        alt="simplan_name_rbg.png"
        width={140}
        height={36}
        priority
      />
    </div>
  );
}

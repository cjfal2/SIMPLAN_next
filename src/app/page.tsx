import Image from "next/image";
import LoginForms from "./components/login/LoginForms";

export default async function HomePage() {
  return (
    <div className="px-6 flex flex-col py-3 w-full h-full justify-center items-center">
      <Image
        src="/images/simplan_logo.png"
        alt="심플랜로고"
        width={200}
        height={200}
        className="rounded-full mb-6"
      />
      <LoginForms />
    </div>
  );
}

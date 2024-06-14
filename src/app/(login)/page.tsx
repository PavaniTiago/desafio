import { LoginCard } from "@/components/ui/login-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src="/background.png" className="object-cover w-full h-screen" sizes="100vw" width={0} height={0} alt="background image"/>
      <LoginCard />
    </main>
  );
}

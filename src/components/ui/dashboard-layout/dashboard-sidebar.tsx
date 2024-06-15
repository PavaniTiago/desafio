import Image from "next/image";
import DashBoardSideBarLinks from "./dashboard-sidebar-links";
import { Separator } from "../separator";
import DashBoardSideBarSubLinks from "./dashboard-sidebar-sub-links";
import { DashBoardUserProfile } from "./dashboard-user-profile";

export default function DashBoardSideBar() {
  return (
    <main className="flex min-h-screen flex-col w-52 items-start p-6">
        <Image alt="don saúde logo" src="/logo.png" className="object-contain w-44 h-fit" sizes="100vw" width={0} height={0}/>
        <DashBoardSideBarLinks />
        <Separator className="bg-[#D0D5DD] my-2"/>
        <DashBoardSideBarSubLinks />
        <div className="flex w-full h-full items-end">
            <DashBoardUserProfile />
        </div>
    </main>
  );
}

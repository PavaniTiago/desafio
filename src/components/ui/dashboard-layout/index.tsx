import DashBoardHeader from "./dashboard-header";
import DashBoardSideBar from "./dashboard-sidebar";

export default function DashBoardLayout({ children } : {children: React.ReactNode}) {
  return (
    <main className="flex min-h-screen w-full">
        <DashBoardSideBar />
        <div className="h-full w-full">
        <DashBoardHeader />
            {children}
        </div>
    </main>
  );
}
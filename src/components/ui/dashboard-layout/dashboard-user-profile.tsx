import Image from "next/image";

export function DashBoardUserProfile(){
    return (
        <div className="flex items-center h-fit w-full bg-primary-foreground rounded-full px-1">
            <Image alt="user profile image" src="/logo.svg" width={0} height={0} className="w-7 p-1.5 h-7 mr-2 bg-primary rounded-full"/>
            <div className="flex flex-col my-1">
                <span className="text-xs font-semibold text-secondary">Ibiporã</span>
                <span className="text-[8px] font-light text-secondary">Gustavo Borges</span>
            </div>
        </div>
    )
}
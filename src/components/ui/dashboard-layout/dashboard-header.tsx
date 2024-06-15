import { PersonIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../button";
import { InputIcon } from "../icon-input";
import Image from "next/image";
import { Separator } from "../separator";

export default function DashBoardHeader() {
  return (
    <main className="flex h-20 items-center justify-between px-12">
      <div className="flex items-center gap-4">
        <Button className="w-fit bg-pink-100 hover:bg-pink-200 transition-all font-semibold rounded-full shadow-none text-primary gap-2"><PlusCircledIcon className="w-4 h-4 text-primary"/> Novo orçamento/atendimento</Button>
        <InputIcon icon="/search.svg" placeholder="Buscar"/>
      </div>
      <div className="flex items-center gap-4">
        <Image alt="icon img" src="/star.svg" className="w-5 h-5 cursor-pointer" width={0} height={0}/>
        <Image alt="icon img" src="/notification.svg" className="w-5 h-5 cursor-pointer" width={0} height={0}/>
        <Separator orientation="vertical" className="mx-1 bg-[#D0D5DD] h-8"/>
        <Button className="bg-pink-100 hover:bg-pink-200 transition-all rounded-full p-2">
            <PersonIcon className="w-5 h-5 text-primary" width={0} height={0}/>
        </Button>
      </div>
    </main>
  );
}

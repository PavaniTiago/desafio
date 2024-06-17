import { PlusCircle } from "lucide-react";
import { Button } from "../button";
import { ColaboratorTabs } from "./colaborator-tabs";

export function Colaborator(){
    return (
        <section className="flex flex-col w-full h-full px-12 pt-8">
            <div className="w-full flex justify-between items-center">
                <h2 className="font-bold text-2xl">Colaborador</h2>
                <Button className="rounded-full gap-2 text-sm py-5 hover:bg-pink-800 transition-all"><PlusCircle className="w-5 h-5 text-white"/> Nota categoria</Button>
            </div>
            <ColaboratorTabs />
        </section>
    )
}
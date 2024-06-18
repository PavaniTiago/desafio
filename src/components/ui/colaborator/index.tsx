import { PlusCircle } from "lucide-react";
import { Button } from "../button";
import { ColaboratorTabs } from "./colaborator-tabs";
import { CreateButton } from "../create-button";

export function Colaborator(){
    return (
        <section className="flex flex-col w-full h-screen px-12 pt-8">
            <div className="w-full flex justify-between items-center">
                <h2 className="font-bold text-2xl">Colaborador</h2>
                <CreateButton />
            </div>
            <ColaboratorTabs />
        </section>
    )
}
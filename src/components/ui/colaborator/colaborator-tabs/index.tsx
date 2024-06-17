import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DataTableWithAcess } from "../colaborator-table-with-acess"
import { DataTableWithNoAcess } from "../colaborator-table-with-no-acess"
import { ShieldBan, ShieldCheck } from "lucide-react"

export function ColaboratorTabs() {
  return (
    <Tabs defaultValue="withAcess" className="w-full pt-4">
      <TabsList className="grid w-full grid-cols-2 h-fit py-1 bg-white rounded-2xl px-1.5">
        <TabsTrigger className="rounded-full py-3 gap-2" value="withAcess"><ShieldCheck className="w-4 h-4"/> Com acesso ao sistema</TabsTrigger>
        <TabsTrigger className="rounded-full py-3 gap-2" value="noAcces"><ShieldBan className="w-4 h-4"/> Sem acesso ao sistema</TabsTrigger>
      </TabsList>
      <TabsContent value="withAcess">
        <DataTableWithAcess />
      </TabsContent>
      <TabsContent value="noAcces">
        <DataTableWithNoAcess />
      </TabsContent>
    </Tabs>
  )
}

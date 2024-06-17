import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
  
  export function ExcludeButton() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="link" className="border-0 p-0 w-5 h-5 shadow-none"><Trash className="w-4 h-4 text-secondary"/></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem absoluta certeza?</AlertDialogTitle>
            <AlertDialogDescription className="text-secondary">
              Essa ação é irreversível, você não poderá recuperar as informações deletadas.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:bg-transparent">Cancelar</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-500 transition-all">Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
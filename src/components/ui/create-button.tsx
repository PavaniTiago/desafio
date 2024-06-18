import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Pencil, PlusCircle } from "lucide-react"

export function CreateButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="rounded-full gap-2 text-sm py-5 hover:bg-pink-800 transition-all"><PlusCircle className="w-5 h-5 text-white"/> Nota categoria</Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle className="flex items-center ml-4">Novo Colaborador</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" className="text-right text-secondary">
              Nome
            </Label>
            <Input
              id="name"
              className="col-span-3 rounded-xl border-muted-foreground"
              placeholder="Digite o nome completo"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="cpf" className="text-right text-secondary">
              CPF
            </Label>
            <Input
            placeholder="Apenas números"
              id="cpf"
              className="col-span-3 rounded-xl border-muted-foreground"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="telefone" className="text-right text-secondary">
              Telefone
            </Label>
            <Input
            placeholder="DDD + Número"
              id="telefone"
              className="col-span-3 rounded-xl border-muted-foreground"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="email" className="text-right text-secondary">
              E-mail
            </Label>
            <Input
            placeholder="Digite aqui"
              id="email"
              className="col-span-3 rounded-xl border-muted-foreground"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="password" className="text-right text-secondary">
              Senha
            </Label>
            <Input
            placeholder="Digite aqui"
              id="password"
              type="password"
              className="col-span-3 rounded-xl border-muted-foreground"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="password" className="text-right text-secondary">
              Confirme a Senha
            </Label>
            <Input
            placeholder="Digite aqui"
              id="password"
              type="password"
              className="col-span-3 rounded-xl border-muted-foreground"
            />
          </div>
          <div className="flex flex-col items-start w-full gap-4 col-start-1 col-end-3">
            <Label htmlFor="file" className="text-right text-secondary">
              Envio de Arquivo
            </Label>
            <Input
              type="file"
              id="file"
              placeholder="clique ou arraste"
              className="col-span-3 rounded-xl border-muted-foreground text-muted-foreground file:text-muted-foreground border-dashed"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="link" className="text-secondary w-56">Cancelar</Button>
          </DialogClose>
          <Button type="submit" className="w-56 rounded-full hover:bg-pink-800 transition-all">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

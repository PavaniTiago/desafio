import prisma from "@/lib/prisma"

export async function POST(req: Request, res: Response) {
    const { nome, cpf, telefone, email, foto } = await req.json()

    try{
        const colaborador = await prisma.colaborador.create({
            data: {
                cpf: cpf,
                nome: nome,
                email: email,
                telefone: telefone,
                photo: foto,
                groupName: "",
            }
        })
        return new Response(colaborador, {
            status: 200,
        })
    }catch{
        return ;
    }
}

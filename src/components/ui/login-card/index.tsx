"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Checkbox } from "../checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form"
import { Lock, User } from "lucide-react"
import { InputIcon } from "../icon-input"
import { useState } from "react"
import { useRouter } from "next/navigation"


export function LoginCard(){
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const formSchema = z.object({
        email: z.string().email({ message: "Insira um e-mail válido." }).trim(),
        password: z.string().min(8, {
          message: "Senha deve ter no mínimo 8 caracteres.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data)
        try {
          const response = await axios.post('/api/', data);
          const { token } = response.data;
      
          // Armazena o token JWT no localStorage para uso posterior
          localStorage.setItem('token', token);
      
          // Agora faz uma requisição GET para obter as informações do usuário
          const userResponse = await axios.get('/api/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          const { user } = userResponse.data;
          console.log('Informações do usuário:', user);
      
          // Redireciona para a página principal ou faz qualquer ação após login
          router.push('/dashboard/colaboradores');
        } catch (error) {
          setError('Credenciais inválidas');
          console.error('Erro ao fazer login:', error);
        }
      }

    return (
        <article className="flex items-center h-full absolute">
            <section>
                <Card className="w-[340px] md:w-[440px] h-[500px] px-4 md:px-12 pb-12 pt-6 border-none rounded-2xl">
                    <CardHeader className="flex items-center pb-12">
                        <CardTitle><Image alt="don saúde logo" src="/logo.png" className="object-contain w-44 h-fit" sizes="100vw" width={0} height={0}/></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel className="text-secondary">E-mail</FormLabel>
                                        <FormControl>
                                            <InputIcon
                                                {...field}
                                                type="email"
                                                placeholder="Preencha com e-mail"
                                                icon={<User className="w-5 h-5"/>}
                                                />
                                        </FormControl>
                                        <FormMessage className="absolute -bottom-5 text-red-600"/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mt-4 relative">
                                        <FormLabel className="text-secondary">Senha</FormLabel>
                                        <FormControl>
                                        <InputIcon
                                                {...field}
                                                type="password"
                                                placeholder="Preencha com senha"
                                                icon={<Lock className="w-5 h-5"/>}
                                        />
                                        </FormControl>
                                        <FormMessage className="absolute -bottom-5 text-red-600"/>
                                    </FormItem>
                                )}
                            />
                            <FormItem className="space-x-2 pt-6 pb-5">
                                <FormControl>
                                    <>
                                        <Checkbox id="check"/>
                                        <FormLabel className="text-secondary font-normal">Lembre de mim</FormLabel>
                                    </>
                                </FormControl>
                            </FormItem>
                            <div className="flex flex-col gap-3">
                                <Button className="rounded-full font-semibold hover:bg-pink-800 transition-all" type="submit">Entrar</Button>
                                <Button variant="link" className="font-semibold hover:bg-pink-100 transition-all rounded-full">Esqueci minha senha</Button>
                            </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </section>
        </article>
    )   
}
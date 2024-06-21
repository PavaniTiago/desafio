import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { comparePasswords, generateToken } from '@/lib/authUtils';
import { NextRequest } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { email, senha } = await req.json();

    if (!email || !senha) {
      return Response.json({ error: 'Email e senha são obrigatórios' });
    }

    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return Response.json({ error: 'Usuário não encontrado' });
    }

    const isPasswordValid = await comparePasswords(senha, existingUser.senha);
    if (!isPasswordValid) {
      return Response.json({ error: 'Senha inválida' });
    }

    const token = generateToken({ userId: existingUser.id });
    console.log(token, 'token gerado')
    return Response.json({ user: existingUser, token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return Response.json({ error: 'Erro ao fazer login' });
  }
}

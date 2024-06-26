import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { comparePasswords, generateToken } from '@/lib/authUtils';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const isPasswordValid = await comparePasswords(senha, existingUser.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const token = generateToken({ userId: existingUser.id });
    return res.status(200).json({ user: existingUser, token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ error: 'Erro ao fazer login' });
  }
}

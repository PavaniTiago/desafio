import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { hashPassword, generateToken, verifyToken } from '@/lib/authUtils';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { email, senha } = await req.json();

    try {
      // Verifica se o email já está em uso
      const existingUser = await prisma.usuario.findUnique({
        where: { email },
      });

      // Hash da senha
      const hashedPassword = await hashPassword(senha);

      // Cria o usuário no banco de dados
      const newUser = await prisma.usuario.create({
        data: {
          email,
          senha: hashedPassword,
        },
      });

      // Gera o token JWT
      const token = generateToken({ userId: newUser.id });

      // Retorna o novo usuário e o token JWT
      return Response.json({ user: newUser, token });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return Response.json({ error: 'Erro ao criar usuário' });
    }
  } 
}

export async function GET(req: Request) {
    const { token } = await req.json();

    try {
        if (!token || typeof token !== 'string') {
          return NextResponse.json({ error: 'Token inválido' });
        }
    
        // Verifica se o token é válido
        const decodedToken = verifyToken(token);
    
        // Se o token for válido, busca as informações do usuário
        const user = await prisma.usuario.findUnique({
          where: { id: decodedToken.userId },
        });
    
        if (!user) {
          return NextResponse.json({ error: 'Usuário não encontrado' });
        }
    
        // Retorna as informações do usuário
        return NextResponse.json({ user });
      } catch (error) {
        console.error('Erro ao verificar token:', error);
        return NextResponse.json({ error: 'Token inválido ou expirado' });
      }
}

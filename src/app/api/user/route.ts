import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { verifyToken } from '@/lib/authUtils';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization')
    console.log(authHeader)

    if (!authHeader) {
      return Response.json({ error: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = verifyToken(token);


    if (!decodedToken || typeof decodedToken !== 'object' || !('userId' in decodedToken)) {
        return Response.json({ error: 'Token inválido ou expirado' });
    }

    const user = await prisma.usuario.findUnique({
      where: { id: decodedToken.userId },
    });

    if (!user) {
      return Response.json({ error: 'Usuário não encontrado' });
    }

    return Response.json({ user });
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return Response.json({ error: 'Erro ao verificar token' });
  }
}

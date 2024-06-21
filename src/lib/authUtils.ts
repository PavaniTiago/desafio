import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Chave secreta para assinar o token. Mantenha-a segura e fora do código fonte.

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePasswords(inputPassword: string, storedPassword: string): Promise<boolean> {
  return await bcrypt.compare(inputPassword, storedPassword);
}

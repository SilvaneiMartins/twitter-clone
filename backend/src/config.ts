import dotenv from 'dotenv';
dotenv.config();

// Porta do servidor
export const PORT = process.env.PORT || 3333;

// Crie uma chave secreta para o JWT
export const JWT_SECRET = process.env.JWT_SECRET || '@qwe#1ert2t#yu3iop@4asd$5fgh6jkl$7zxc8v%bn9qwm0';

// Url do banco de dados
export const DATABASE_URL = process.env.DATABASE_URL;

// Configurações de envio de email
export const EMAIL_TOKEN_EXPIRATION_MINUTES = 10;

// Configurações de envio de email
export const AUTHENTICATION_EXPIRATION_HOURS = 12;

// Chave de acesso para envio de email
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;

// Chave secreta de acesso para envio de email
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

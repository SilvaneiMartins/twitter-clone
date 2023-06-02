import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import {
    JWT_SECRET,
    EMAIL_TOKEN_EXPIRATION_MINUTES,
    AUTHENTICATION_EXPIRATION_HOURS,
} from '../config';
import { expirationDate } from '../utils/expirationDate';
import { sendEmailToken } from '../services/emailService';
import { generateEmailToken } from '../utils/generateEmailToken';

const prisma = new PrismaClient();

/**
 * Nestes dois métodos, você pode usar qualquer biblioteca de geração de token.
 * @returns Metodo que ira gerar um token de autenticação
 */
const generateAuthToken = (tokenId: number): string => {
    const jwtPayload = { tokenId };

    return jwt.sign(jwtPayload, JWT_SECRET, {
        algorithm: "HS256",
        noTimestamp: true,
    });
};

/**
 * Crie um usuário, se ele não existir,
 * gerar um emailToken e envie para o email do usuário cadastrado.
 * @param req Método de requisição
 * @param res Metodo de resposta
 */
const login = async (req: Request, res: Response) => {
    const { email } = req.body;

    // Gera token de 8 dígitos
    const expiration = expirationDate();
    const emailToken = generateEmailToken();

    try {
        const createdToken = await prisma.token.create({
            data: {
                type: "EMAIL",
                emailToken,
                expiration,
                user: {
                    connectOrCreate: {
                        where: { email },
                        create: { email },
                    },
                }
            }
        });

        console.log(createdToken);
        await sendEmailToken(email, emailToken);
        res.status(200).json({ message: "Token foi enviado para seu email!" });
    } catch (e) {
        res.status(400).json({ message: "Não foi possível iniciar o processo de autenticação!" });
    }
};

/**
 * Validar o emailToken
 * Gerar um token JWT para o usuário.
 * @param req Método de requisição
 * @param res Metodo de resposta
 */
const authenticate = async (req: Request, res: Response) => {
    const { email, emailToken } = req.body;

    try {
        const dbEmailToken = await prisma.token.findUnique({
            where: { emailToken },
            include: { user: true },
        });

        if (!dbEmailToken || !dbEmailToken.valid) {
            return res.sendStatus(401);
        }

        if (dbEmailToken.expiration < new Date()) {
            return res.status(401).json({ message: "Token expirado!" });
        }

        if (dbEmailToken?.user?.email !== email) {
            return res.sendStatus(401);
        }

        // Aqui nós validamos que o usuário é o proprietário do e-mail.
        // Gere um token de API.
        const expiration = expirationDate();

        const apiToken = await prisma.token.create({
            data: {
                type: "API",
                expiration,
                user: {
                    connect: { email },
                }
            }
        });

        // Invalida o e-mail
        await prisma.token.update({
            where: { id: dbEmailToken.id },
            data: { valid: false },
        });

        // Gerar o JWT token
        const authToken = generateAuthToken(apiToken.id);
        res.status(200).json({ authToken });
    } catch (error) {
        res.status(400).json({ message: "Não foi possível autenticar o usuário!" });
    }
};

export const AuthController = {
    login,
    authenticate,
}

import jwt from "jsonwebtoken";
import { PrismaClient, User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { JWT_SECRET } from '../config';

const prisma = new PrismaClient();

type AuthRequest = Request & { user?: User };

const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const jwtToken = authHeader?.split(' ')[1];

    if (!jwtToken) {
        res.status(401).json({ error: 'Não autorizado!' });
    }

    try {
        const payload = await jwt.verify(jwtToken!, JWT_SECRET) as { tokenId: number };
        const dbToken = await prisma.token.findUnique({
            where: { id: Number(payload.tokenId) },
            include: { user: true },
        });

        if (!dbToken?.valid || dbToken.expiration < new Date()) {
            return res.status(401).json({ error: 'API Token expirado!' });
        }

        req.user = dbToken.user;
    } catch (e) {
        return res.status(401).json({ error: 'Não autorizado!' });
    }

    next();
};

export const mdAuth = {
    authenticateToken
};

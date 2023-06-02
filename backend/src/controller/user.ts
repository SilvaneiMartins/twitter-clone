import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Criar um usuário
const userCreate = async (req: Request, res: Response) => {
    const { name, email, username } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                username,
            }
        });
        res.status(201).json(user);
    } catch (e) {
        res.status(400).json({ error: 'Username e email são obrigatório!' });
    }
};

// Buscar todos os usuários
const userGetAll = async (req: Request, res: Response) => {
    const allUser = await prisma.user.findMany({
        include: {
            tweets: {
                select: {
                    id: true,
                    content: true,
                    image: true,
                    impression: true,
                }
            },
        }
    });
    res.status(200).json(allUser);
};

// Buscar um usuário por ID
const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            tweets: {
                select: {
                    id: true,
                    content: true,
                    image: true,
                    impression: true,
                }
            },
        }
    });
    res.status(200).json(user);
};

// Atualizar um usuário
const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { bio, name, image } = req.body;

    try {
        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                bio,
                name,
                image,
            }
        });
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({ error: 'Não foi possível atualizar usuário!' });
    }
};

// Deletar um usuário
const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });
    res.status(200).json({ mgs: `Usuário excluído com sucesso!` });
};

export const UserController = {
    userCreate,
    userGetAll,
    getUserById,
    updateUser,
    deleteUser
};

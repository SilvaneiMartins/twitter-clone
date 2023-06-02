import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Criar um tweet
const tweetCreate = async (req: Request, res: Response) => {
    const { content, image } = req.body;

    // @ts-ignore
    const user = req.user;

    try {
        const tweet = await prisma.tweet.create({
            data: {
                content,
                image,
                userId: user?.id,
            }
        });
        res.status(201).json(tweet);
    } catch (e) {
        res.status(400).json({ error: 'Não foi possível criar o tweet!' });
    }
};

// Buscar todos os tweets
const tweetGetAll = async (req: Request, res: Response) => {
    const allTweet = await prisma.tweet.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    username: true,
                }
            },
        }
    });
    res.status(200).json(allTweet);
};

// Buscar um tweet
const getTweetById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const tweet = await prisma.tweet.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    username: true,
                }
            },
        }
    });
    res.status(200).json(tweet);
};

// Atualizar um tweet
const updateTweet = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { content, image, userId } = req.body;

    try {
        const tweet = await prisma.tweet.update({
            where: { id: Number(id) },
            data: {
                content,
                image,
                userId: Number(userId), // TODO: Salvar com base no usuário de autenticação
            }
        });
        res.status(200).json(tweet);
    } catch (e) {
        res.status(400).json({ error: 'Não foi possível atualizar o tweet!' });
    }
};

// Deletar um tweet
const deleteTweet = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.tweet.delete({
        where: {
            id: Number(id)
        }
    });
    res.status(200).json({ mgs: `Tweet excluído com sucesso!` });
};

export const TweetController = {
    tweetCreate,
    tweetGetAll,
    getTweetById,
    updateTweet,
    deleteTweet
};

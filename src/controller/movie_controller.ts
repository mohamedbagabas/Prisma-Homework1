import { PrismaClient  } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import {
  GetOneMovieSchemaType, MovieSchemaType
} from '../zod_schema/movie_schema'

export const getmovieHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await prisma.movie.findMany();
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};
export const getOnemovieHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.query as GetOneMovieSchemaType;
    const movie = await prisma.movie.findUnique({
      where: { id },
    });

    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};

export const addmovieHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newmovie = req.body as PrismaClient ;

    await prisma.movie.create({
      data: newmovie,
    });
    return res.status(201).json({ message: 'New movie added !' });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    if (prismaError.code == 'P2002') {
      return res.status(400).json({
        message: 'You phone number have been used before',
      });
    }
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};

export const updatemovieHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newmovie = req.body as PrismaClient;
    const { id } = req.body as MovieSchemaType;

    await prisma.movie.update({
      where: { id },
      data: newmovie,
    });
    return res.status(200).json({ message: 'movie updated' });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};

export const deletemovieHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.body as MovieSchemaType;

    await prisma.movie.delete({
      where: { id },
    });
    return res.status(200).json({ message: 'movie Deleted !' });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};
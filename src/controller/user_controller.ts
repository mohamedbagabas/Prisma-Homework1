import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import {
  GetUserByIdSchemaType,
  UserSchemaType,
} from "../zod_schema/user_schema";

export const addUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let newUser = req.body as PrismaClient;
    newUser.joiningYear = new Date(newUser.joiningYear);
    await prisma.user.create({
      data: newUser,
    });
    return res.status(201).json({ message: "New user added !" });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Server Error !",
    });
  }
};

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let filter = {};
    if (req.query) {
      if (req.query.email) {
        filter = { email: req.query.email };
      } else if (req.query.age) {
        filter = { age: { gt: +req.query.age } };
      } else if (req.query.role) {
        // count
        filter = { role: req.query.role };
      } else if (req.query.username && req.query.password) {
        filter = {
          username: req.query.username,
          password: req.query.password,
        };
      } else if (req.query.joiningYear) {
        filter = {
          joiningYear: {
            gte: new Date(req.query.joiningYear.toString()),
          },
        };
      }
    }
    console.log("filter", filter);
    const users = await prisma.user.findMany({ where: filter });
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error !" });
  }
};

export const updateUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body as PrismaClient;
    const { id } = req.params as UserSchemaType;

    await prisma.user.update({
      where: { id },
      data: newUser,
    });
    return res.status(200).json({ message: "Movie updated" });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error !",
    });
  }
};

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as GetUserByIdSchemaType;
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error !" });
  }
};
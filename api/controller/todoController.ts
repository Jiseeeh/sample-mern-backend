import { prisma } from "../lib/prisma";
import { Request, Response } from "express";

export async function createTodo(req: Request, res: Response) {
  const { title, body } = req.body;

  const todo = await prisma.todo.create({
    data: {
      title,
      body,
    },
  });

  res.status(200).json({ todo });
}

export async function getAllTodo(req: Request, res: Response) {
  const todos = await prisma.todo.findMany();

  res.status(200).json({ todos });
}

export async function getOneTodo(req: Request, res: Response) {
  const { id } = req.params;

  const todo = await prisma.todo.findFirstOrThrow({
    where: {
      id,
    },
  });

  res.status(200).json({ todo });
}

export async function updateTodo(req: Request, res: Response) {
  const { id } = req.params;
  const { title, body } = req.body;

  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
    },
  });

  res.status(200).json({ updatedTodo });
}

export async function deleteTodo(req: Request, res: Response) {
  const { id } = req.params;

  const deletedTodo = await prisma.todo.delete({
    where: {
      id,
    },
  });

  res.status(200).json({ deletedTodo });
}

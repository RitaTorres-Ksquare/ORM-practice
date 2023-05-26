import { Request, Response } from "express";
import Comment from "../models/Comment";

export const createComment = async (req: Request, res: Response) => {
  try {
    const { text, userId, postId } = req.body;
    const comment = await Comment.create({ text, userId, postId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

export const getCommentsByPost = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.findAll({ where: { postId } });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve comments" });
  }
};

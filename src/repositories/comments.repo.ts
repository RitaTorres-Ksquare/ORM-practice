import Comment, { CommentAttributes } from "../models/Comment";

export const createComment = async (commentData: CommentAttributes) => {
  try {
    const comment = await Comment.create(commentData);
    return comment;
  } catch (error) {
    throw new Error("Failed to create comment");
  }
};

export const getCommentsByPostId = async (postId: number) => {
  try {
    const comments = await Comment.findAll({ where: { postId } });
    return comments;
  } catch (error) {
    throw new Error("Failed to retrieve comments");
  }
};

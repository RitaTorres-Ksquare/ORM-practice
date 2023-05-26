import Post, { PostAttributes } from '../models/Post';

export const createPost = async (postData: PostAttributes) => {
  try {
    const post = await Post.create(postData);
    return post;
  } catch (error) {
    throw new Error('Failed to create post');
  }
};

export const getPostById = async (postId: number) => {
  try {
    const post = await Post.findByPk(postId);
    return post;
  } catch (error) {
    throw new Error('Failed to retrieve post');
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await Post.findAll();
    return posts;
  } catch (error) {
    throw new Error('Failed to retrieve posts');
  }
};
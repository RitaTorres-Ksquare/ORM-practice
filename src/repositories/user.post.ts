import User, { UserAttributes } from '../models/User';

export const createUser = async (userData: UserAttributes) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

export const getUserById = async (userId: number) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    throw new Error('Failed to retrieve user');
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Failed to retrieve users');
  }
};
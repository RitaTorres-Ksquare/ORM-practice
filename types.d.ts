import { BuildOptions, Model } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostAttributes {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface CommentAttributes {
  id: number;
  content: string;
  userId: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
}

type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserAttributes;
};

type PostStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PostAttributes;
};

type CommentStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CommentAttributes;
};

declare global {
  namespace Express {
    interface Request {
      body: any;
    }
  }
}

export { UserAttributes, PostAttributes, CommentAttributes, UserStatic, PostStatic, CommentStatic };

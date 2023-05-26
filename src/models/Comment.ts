import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";
import User from './User';
import Post from './Post';

export interface CommentAttributes {
  id?: number;
  text: string;
  userId: number;
  postId: number;
}

class Comment extends Model<
  InferAttributes<Comment>,
  InferCreationAttributes<Comment, { omit: "id" }>
> {
  declare id: CreationOptional<number>;
  declare text: string;
  declare userId: number;
  declare postId: number;
}

export const setupComment = (sequelize: Sequelize) => {
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      modelName: "Comment",
      sequelize,
      paranoid: true,
    }
  );
};

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

export default Comment;
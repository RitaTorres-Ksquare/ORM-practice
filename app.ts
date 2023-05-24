import express, { Request, Response } from "express";
import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";
import { CommentAttributes, PostAttributes, UserAttributes } from "./types";

const app = express();
const port = 3000;

// Connect to the database
const sequelize = new Sequelize(
  "postgres://postgres:titi2134@localhost:5432/ORM",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Define the models
class User extends Model{}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

class Post extends Model{}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
  }
);

class Comment extends Model{}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

// Define the relationships
User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(User);
Comment.belongsTo(Post);

// Create the tables (if they don't exist)
sequelize
  .sync()
  .then(() => {
    console.log("Database and tables created successfully.");
  })
  .catch((error) => {
    console.error("Error creating database tables:", error);
  });

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.post("/users", async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user." });
  }
});

app.post("/posts", async (req: Request, res: Response) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post." });
  }
});

app.get("/users/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId, { include: Post });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user." });
  }
});

app.get("/users", async (_: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users." });
  }
});

app.get("/posts/:postId", async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const post = await Post.findByPk(postId, { include: Comment });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving post." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

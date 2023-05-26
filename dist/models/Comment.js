"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupComment = void 0;
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("./User"));
const Post_1 = __importDefault(require("./Post"));
class Comment extends sequelize_1.Model {
}
const setupComment = (sequelize) => {
    Comment.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: sequelize_1.DataTypes.STRING,
        userId: sequelize_1.DataTypes.INTEGER,
        postId: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "Comment",
        sequelize,
        paranoid: true,
    });
};
exports.setupComment = setupComment;
User_1.default.hasMany(Comment);
Comment.belongsTo(User_1.default);
Post_1.default.hasMany(Comment);
Comment.belongsTo(Post_1.default);
exports.default = Comment;

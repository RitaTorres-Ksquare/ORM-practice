"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPost = void 0;
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
}
const setupPost = (sequelize) => {
    Post.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        text: sequelize_1.DataTypes.STRING,
        userId: sequelize_1.DataTypes.INTEGER,
    }, {
        modelName: "Post",
        sequelize,
        paranoid: true,
    });
};
exports.setupPost = setupPost;
exports.default = Post;

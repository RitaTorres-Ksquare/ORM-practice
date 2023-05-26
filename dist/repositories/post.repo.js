"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.getPostById = exports.createPost = void 0;
const Post_1 = __importDefault(require("../models/Post"));
const createPost = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post_1.default.create(postData);
        return post;
    }
    catch (error) {
        throw new Error('Failed to create post');
    }
});
exports.createPost = createPost;
const getPostById = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post_1.default.findByPk(postId);
        return post;
    }
    catch (error) {
        throw new Error('Failed to retrieve post');
    }
});
exports.getPostById = getPostById;
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post_1.default.findAll();
        return posts;
    }
    catch (error) {
        throw new Error('Failed to retrieve posts');
    }
});
exports.getAllPosts = getAllPosts;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const router = express_1.default.Router();
router.post('/', postController_1.createPost);
router.get('/', postController_1.getAllPosts);
router.get('/:id', postController_1.getPost);
exports.default = router;

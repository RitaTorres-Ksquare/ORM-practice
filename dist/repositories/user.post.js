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
exports.getAllUsers = exports.getUserById = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.create(userData);
        return user;
    }
    catch (error) {
        throw new Error('Failed to create user');
    }
});
exports.createUser = createUser;
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findByPk(userId);
        return user;
    }
    catch (error) {
        throw new Error('Failed to retrieve user');
    }
});
exports.getUserById = getUserById;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.findAll();
        return users;
    }
    catch (error) {
        throw new Error('Failed to retrieve users');
    }
});
exports.getAllUsers = getAllUsers;

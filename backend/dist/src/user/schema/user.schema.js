"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
});
exports.userSchema = userSchema;
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.UserModel = UserModel;
//# sourceMappingURL=user.schema.js.map
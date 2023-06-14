"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../service/user.service");
const user_controller_1 = require("../controller/user.controller");
const userRepository_1 = require("../respository/userRepository");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../../auth/strategy/jwt.strategy");
const JwtAuthGuard_1 = require("../../guard/JwtAuthGuard");
const auth_service_1 = require("../../auth/service/auth.service");
const user_schema_1 = require("../schema/user.schema");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.userSchema }]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, userRepository_1.UserRepository, jwt_strategy_1.JwtStrategy, JwtAuthGuard_1.JwtAuthGuard, auth_service_1.AuthService],
        exports: [auth_service_1.AuthService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map
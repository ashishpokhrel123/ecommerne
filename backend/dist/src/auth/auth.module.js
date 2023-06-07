"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const passport_1 = require("@nestjs/passport");
const user_schema_1 = require("../user/schema/user.schema");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const userRepository_1 = require("../user/respository/userRepository");
const user_controller_1 = require("../user/controller/user.controller");
const user_service_1 = require("../user/service/user.service");
const auth_controller_1 = require("./controller/auth.controller");
const auth_service_1 = require("./service/auth.service");
const JwtAuthGuard_1 = require("../guard/JwtAuthGuard");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.userSchema }]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
        ],
        controllers: [user_controller_1.UserController, auth_controller_1.AuthController],
        providers: [user_service_1.UserService, jwt_strategy_1.JwtStrategy, userRepository_1.UserRepository, auth_service_1.AuthService, JwtAuthGuard_1.JwtAuthGuard],
        exports: [auth_service_1.AuthService, userRepository_1.UserRepository],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const userRepository_1 = require("../../user/respository/userRepository");
const bcrypt = require("bcrypt");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const user_schema_1 = require("../../user/schema/user.schema");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.userRepository.findUserByEmail(email);
        if (user && user.password === password) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async getToken(payload) {
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: "7d",
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.JWT_REFRESH,
                expiresIn: "7d",
            }),
        ]);
        return { access_token, refresh_token };
    }
    async login(email, password, response) {
        if (!(0, class_validator_1.isEmail)(email)) {
            throw new common_1.HttpException("Email is not valid", common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        if (password.length < 1) {
            throw new common_1.HttpException("Password is required", common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw new common_1.HttpException("Invalid email", common_1.HttpStatus.FORBIDDEN);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.HttpException("Invalid email or password", common_1.HttpStatus.FORBIDDEN);
        }
        const payload = { email: user.email, id: user.id };
        const { access_token, refresh_token } = await this.getToken(payload);
        response.cookie("token", "Bearer " + refresh_token, {
            httpOnly: true,
            secure: true,
        });
        return {
            status: common_1.HttpStatus.CREATED,
            message: "Login successful",
            access_token,
        };
    }
    async register(body) {
        const doesEmailAlreadyExist = await this.userRepository.findUserByEmail(body.email);
        if (doesEmailAlreadyExist) {
            throw new common_1.HttpException("Email already exists", common_1.HttpStatus.CONFLICT);
        }
        const user = await this.registerUserFromInput(body);
        const savedUser = await this.userRepository.createUser(user);
        if (savedUser) {
            return {
                status: common_1.HttpStatus.CREATED,
                message: "User created successfully",
                data: savedUser,
            };
        }
        else {
            return {
                status: common_1.HttpStatus.EXPECTATION_FAILED,
                message: "Internal Server Error",
                data: null,
            };
        }
    }
    async registerUserFromInput(body) {
        const { name, email, password, photo, gender, phone, role } = body;
        const user = new user_schema_1.UserModel({
            name,
            email,
            password: await this.passwordHashFunction(password),
            photo,
            gender,
            phone,
            role
        });
        return user;
    }
    async isPasswordStrong(password) {
        const passwordRegex = /^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).*$/;
        return passwordRegex.test(password);
    }
    async passwordHashFunction(password) {
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    async getEmail(email) {
        return this.userRepository.findUserByEmail(email);
    }
    async refreshAccessToken(refreshToken) {
        return;
    }
    async logout(response) {
        response.cookie("token", null),
            {
                httpOnly: true,
                secure: true,
            };
        return {
            status: common_1.HttpStatus.OK,
            message: "Logout successful",
        };
    }
};
__decorate([
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "login", null);
__decorate([
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "logout", null);
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
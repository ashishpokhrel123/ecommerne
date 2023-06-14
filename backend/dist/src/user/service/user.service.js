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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const userRepository_1 = require("../respository/userRepository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async registerUser(user) {
        const createdUser = await this.userRepository.createUser(user);
        return createdUser;
    }
    async getProfile(userId) {
        const user = await this.userRepository.findUserById(userId);
        const { name, email, photo, gender, phone, role } = user;
        return {
            status: common_1.HttpStatus.OK,
            message: "Profile fetech succesfully",
            data: {
                name: name ? name : null,
                email: email ? email : null,
                photo: photo ? photo : null,
                gender: gender ? gender : null,
                phone: phone ? phone : null,
                role: role ? role : null,
            },
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
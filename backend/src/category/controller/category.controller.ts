import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Request,
  Put,
} from "@nestjs/common";
import { CategoryService } from "../service/category.service";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { Roles } from "src/decorator/role.decorator";
import { UserRole } from "src/user/schema/user.schema";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post("add")
  @Roles(UserRole.ADMIN)
  async addCategory(@Body() category: CreateCategoryDto) {
    return await this.categoryService.createCategory({ category });
  }

  @Put("update/:id")
  @Roles(UserRole.ADMIN)
  async updateCategory(
    @Param("id") id: string,
    @Body() category: UpdateCategoryDto
  ) {
    return await this.categoryService.updateCategory({ id, category });
  }

  @Get("all")
  async fetchCategory() {
    return await this.categoryService.fetechAllCategory();
  }
}

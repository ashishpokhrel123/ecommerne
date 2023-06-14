import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CategoryRepository } from "../respository/category.resposioty";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { Category } from "../schema/category.schema";
import { UpdateCategoryDto } from "../dto/update-category.dto";

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory({ category }) {
    const createdCategory = await this.categoryRepository.createCategory(
      category
    );
    return createdCategory;
  }

  async updateCategory({ id, category }) {
    const updatedCategory = await this.categoryRepository.updateCategory({
      id,
      category,
    });
    return updatedCategory;
  }

  async fetechAllCategory() {
    const categories = await this.categoryRepository.findAllCategories();
    return categories;
  }
}

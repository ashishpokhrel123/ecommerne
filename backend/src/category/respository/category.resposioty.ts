import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "../schema/category.schema";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel("Category") private categoryModel: Model<Category>
  ) {}

  async createCategory({category} ) {
    const newCategory = new this.categoryModel(category);
    return newCategory.save();
  }
  async updateCategory( {id, category}) {
    return this.categoryModel.findByIdAndUpdate(id, category, { new: true });
  }

  async findAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }
}

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { categorySchema } from "../schema/category.schema";
import { CategoryController } from "../controller/category.controller";
import { CategoryService } from "../service/category.service";
import { CategoryRepository } from "../respository/category.resposioty";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Category", schema: categorySchema }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryRepository],
})
export class CategoryModule {}

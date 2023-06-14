import { Schema, Document, model } from "mongoose";

interface Category extends Document {
  name: string;
}

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
});

const CategoryModel = model<Category>("Category", categorySchema);

export { Category, CategoryModel, categorySchema };

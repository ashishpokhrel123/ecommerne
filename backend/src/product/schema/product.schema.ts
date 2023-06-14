import { Schema, Document, model, Types } from "mongoose";
// product interface
interface Product extends Document {
  name: string;
  images: string[];
  description: string;
  price: number;
  stock: number;
  color: string[];
  size: string[];
  category: Types.ObjectId;
}

//review interface

interface Review extends Document {
  user: Types.ObjectId;
  product: Types.ObjectId;
  rating: number;
  review: string;
  createdAt: Date;
}

//product schema

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  color: { type: [String], required: true },
  size: { type: [String], required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

//review schema

const reviewSchema = new Schema<Review>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

//product

const ProductModel = model<Product>("Product", productSchema);

//product review

const ReviewModel = model<Review>("Review", reviewSchema);

export {
  Product,
  ProductModel,
  productSchema,
  Review,
  ReviewModel,
  reviewSchema,
};

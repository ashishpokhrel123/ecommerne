"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewSchema = exports.ReviewModel = exports.productSchema = exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    color: { type: [String], required: true },
    size: { type: [String], required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: true },
});
exports.productSchema = productSchema;
const reviewSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: "Product", required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.reviewSchema = reviewSchema;
const ProductModel = (0, mongoose_1.model)("Product", productSchema);
exports.ProductModel = ProductModel;
const ReviewModel = (0, mongoose_1.model)("Review", reviewSchema);
exports.ReviewModel = ReviewModel;
//# sourceMappingURL=product.schema.js.map
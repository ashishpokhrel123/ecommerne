/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema, Document, Types } from "mongoose";
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
interface Review extends Document {
    user: Types.ObjectId;
    product: Types.ObjectId;
    rating: number;
    review: string;
    createdAt: Date;
}
declare const productSchema: Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product> & Omit<Product & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>> & Omit<import("mongoose").FlatRecord<Product> & {
    _id: Types.ObjectId;
}, never>>;
declare const reviewSchema: Schema<Review, import("mongoose").Model<Review, any, any, any, Document<unknown, any, Review> & Omit<Review & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Review, Document<unknown, {}, import("mongoose").FlatRecord<Review>> & Omit<import("mongoose").FlatRecord<Review> & {
    _id: Types.ObjectId;
}, never>>;
declare const ProductModel: import("mongoose").Model<Product, {}, {}, {}, Document<unknown, {}, Product> & Omit<Product & {
    _id: Types.ObjectId;
}, never>, any>;
declare const ReviewModel: import("mongoose").Model<Review, {}, {}, {}, Document<unknown, {}, Review> & Omit<Review & {
    _id: Types.ObjectId;
}, never>, any>;
export { Product, ProductModel, productSchema, Review, ReviewModel, reviewSchema, };

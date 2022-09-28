import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  productName: String,
  productPrice: Number,
  productDescription: String,
  productPictures: {
    description: "Pictures for the products",
    type: "array",
    products: {
      description: "List of pictures",
      type: "string",
    },
  },
});
//  first String is Name of the collection in database
const ProductModel = mongoose.model("product", ProductSchema);
export default ProductModel;

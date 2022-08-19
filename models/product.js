import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  id: String,
  userId: String,
  itemName: String,
  itemPrice: Number,
  itemDescription: String,
  itemPictures: {
    description: "Pictures for the products",
    type: "array",
    items: {
      description: "List of pictures",
      type: "string",
    },
  },
});
//              first String is Name of the collection in database
const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;

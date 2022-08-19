import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  id: String,
  userId: String,
  itemName: String,
  itemPrice: Number,
  itemDescription: String,
  itemPictures: { pic1: String, pic2: String },
});
//              first String is Name of the collection in database
const ProductModel = mongoose.model("books", ProductSchema);
export default ProductModel;

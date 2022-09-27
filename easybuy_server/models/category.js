import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  pictures: {
    description: "Pictures for the Category",
    type: "array",
    products: {
      description: "List of pictures",
      type: "string",
    },
  },
});
//  first String is Name of the collection in database
const CategoryModel = mongoose.model("category", CategorySchema);
export default CategoryModel;

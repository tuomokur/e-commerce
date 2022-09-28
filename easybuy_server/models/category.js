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
// https://stackoverflow.com/questions/14641834/how-to-get-rid-of-error-overwritemodelerror-cannot-overwrite-undefined-mode
let CategoryModel;
if (mongoose.models.categories) {
  CategoryModel = mongoose.models.categories;
} else {
  CategoryModel = mongoose.model("categories", CategorySchema);
}
export default CategoryModel;

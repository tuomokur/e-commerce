import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  streetAddress: String,
  postNumber: Number,
  phone: String,
  username: String,
  password: String,
  email: String
});
//              first   String is Name of the collection in database
const UserModel = mongoose.model("users", userSchema);
export default UserModel;

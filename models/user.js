import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  streetAddress: String,
  postNumber: Number,
  phone: String,
  userName: String,
  password: String,
});
//              first   String is Name of the collection in database
const UserModel = mongoose.model("users", userSchema);
export default UserModel;

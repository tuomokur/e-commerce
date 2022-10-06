import CategoryModel from "../models/category.js";
import ProductModel from "../models/product.js";

export const getProduct = async (req, res) => {
  res.send("Here will be particular product");
};

export const getAllProducts = async (req, res) => {
  const search = req.query.search || "";
  const category = req.query.category || "";
  try {
    let products = [];
    let categoryId = "";
    if (category !== "") {
      const category = await CategoryModel.findOne({ name: category });
      if (category) {
        categoryId = category._id;
      }
    }
    if (search !== "") {
      // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
      const allProducts = await ProductModel.find({
        productName: { $eq: search },
        productDescription: { $regex: `${search}`, $options: "i" },
        categoryId: categoryId,
      });
      products = allProducts.slice(0, 20);
    } else {
      products = await ProductModel.find();
    }
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const addProduct = async (req, res) => {
  const dataToSave = req.body;
  if (
    !dataToSave ||
    typeof dataToSave.productName != "string" ||
    typeof dataToSave.productDescription != "string" ||
    typeof dataToSave.productPrice != "number" ||
    typeof dataToSave.categoryName != "string"
  ) {
    res.status(400).send({ message: "Data can not be empty!" });
  } else {
    try {
      const category = await CategoryModel.findOne({
        name: dataToSave.categoryName,
      });
      if (category) {
        const productToBeSave = {
          productName: dataToSave.productName,
          productDescription: dataToSave.productDescription,
          productPrice: dataToSave.productPrice,
          categoryId: category._id,
          userId: req.user._id,
        };
        const newProduct = new ProductModel(productToBeSave);
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
      } else {
        res.status(404).json({ message: "category not found" });
      }
    } catch (e) {
      res.status(400).json({ message: "error in data format" });
    }
  }
};

export const updateProduct = async (req, res) => {
  const query = {
    _id: req.body._id,
  };
  const update = {
    ...req.body,
  };
  if (!update) {
    res.status(400).json({ message: "Can not update" });
  } else {
    try {
      const updatedProduct = await ProductModel.findOneAndUpdate(query, update);
      res.json(updatedProduct);
    } catch (e) {
      res.status(400).json({ message: "error" });
    }
  }
};

export const deleteProduct = async (req, res) => {
  const query = req.params.id;
  const product = await ProductModel.findById(query);
  if (product) {
    const dataToDelete = await ProductModel.deleteOne({ _id: query });
    res.status(200).send("Data deleted successfully");
  } else {
    res.status(400).json({ message: "Data not found" });
  }
};

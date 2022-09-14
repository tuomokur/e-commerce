import ProductModel from "../models/product.js";

export const getProduct = async (req, res) => {
  res.send("Here will be particular product");
};

export const getAllProducts = async (req, res) => {
  const search = req.query.search || "";
  console.log("search", search);

  try {
    let products = [];
    if (search !== "") {
      // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
      const allProducts = await ProductModel.find({
        itemName: { $eq: search },
        itemDescription: { $regex: `${search}`, $options: "i" },
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
  if (!dataToSave) {
    res.status(400).send({ message: "Data can not be empty!" });
  } else if (typeof dataToSave.itemName != "string") {
    res.status(400).send({ message: "Item name should be in string format" });
  } else if (typeof dataToSave.itemPrice != "number") {
    res.status(400).send({ message: "Item price should be a number" });
  } else {
    try {
      const newProduct = new ProductModel(dataToSave);
      const savedProduct = await newProduct.save();
      res.json(savedProduct);
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

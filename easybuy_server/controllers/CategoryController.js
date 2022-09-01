import CategoryModel from "../models/Category.js";

export const getCategory = async (req, res) => {
  res.send("Here will be particular Category");
};

export const getAllCategories = async (req, res) => {
  try {
    const allCategorys = await CategoryModel.find();
    res.json(allCategorys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addCategory = async (req, res) => {
  const dataToSave = req.body;
  if (!dataToSave) {
    res.status(400).send({ message: "Data can not be empty!" });
  } else if (typeof dataToSave.name !== "string") {
    res.status(400).send({ message: "name should be in string format" });
  } else if (typeof dataToSave.description !== "string") {
    res.status(400).send({ message: "description should be in string fromat" });
  } else if (typeof dataToSave.date.getMonth !== "function") {
    res.status(400).send({ message: "date should be in ISO format" });
  } else if (typeof dataToSave.pictures !== "array") {
    res.status(400).send({ message: "pictures should be in array format" });
  } else {
    try {
      const newCategory = new CategoryModel(dataToSave);
      const savedCategory = await newCategory.save();
      res.json(savedCategory);
    } catch (e) {
      res.status(400).json({ message: "error in data format" });
    }
  }
};

import CategoryModel from "../models/category.js";

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
  if (
    !dataToSave ||
    typeof dataToSave.name !== "string" ||
    typeof dataToSave.description !== "string" ||
    typeof dataToSave.date !== "string" ||
    typeof dataToSave.pictures !== "array"
  ) {
    res.status(400).send({ message: "Data is not correct format" });
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

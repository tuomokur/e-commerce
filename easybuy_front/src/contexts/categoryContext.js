import { createContext, useState, useEffect } from "react";
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "./categoryApiRequests.js";

export const CategoryContext = createContext({});

const CategoryProvider = (props) => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const fetchcategories = async () => {
      if (categories.length === 0) {
        try {
          const dbcategories = await getCategories();
          setcategories(dbcategories.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchcategories();
  }, [categories, setcategories]);

  const doAddCategory = async (newCategory) => {
    try {
      const res = await addCategory(newCategory);
      const newcategories = [...categories, res.data];
      setcategories(newcategories);
    } catch (error) {
      console.error(error);
    }
  };
  const getCategory = (id) => {
    if (categories.length > id && id >= 0) {
      return categories[id];
    }
  };

  const editCategory = async (id, edittedCategory) => {
    try {
      await updateCategory(id, edittedCategory);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      const index = categories.findIndex((Category) => {
        return Category.id === id;
      });

      if (index !== -1) {
        const newcategories = categories.map((Category, pindex) => {
          if (pindex === index) {
            return {
              ...Category,
              edittedCategory,
            };
          } else {
            return Category;
          }
        });
        setcategories(newcategories);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const doDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      const newcategories = categories.filter((Category) => {
        return Category.id !== id;
      });

      setcategories(newcategories);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategory,
        setcategories,
        addCategory: doAddCategory,
        editCategory,
        deleteCategory: doDeleteCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

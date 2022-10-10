import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext.js";
import { getCategories, addCategory } from "./categoryApiRequests.js";

export const CategoryContext = createContext({});

const CategoryProvider = (props) => {
  const { token } = useAuthContext();
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const fetchcategories = async () => {
      if (categories.length === 0) {
        try {
          const dbcategories = await getCategories(token);
          // check to avoid infinite looping
          if (dbcategories.length > 0) {
            setcategories(dbcategories);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchcategories();
  }, [categories, setcategories, token]);

  const doAddCategory = async (newCategory) => {
    try {
      const res = await addCategory(token, newCategory);
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

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategory,
        setcategories,
        addCategory: doAddCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context)
    throw new Error("CategoryContext must be used with its provider");
  return context;
};
export default CategoryProvider;

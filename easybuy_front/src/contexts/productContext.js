import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./authContext";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./productApiRequests";

export const ProductContext = createContext({});

const ProductProvider = (props) => {
  const { isLoggedIn, token } = useAuthContext();
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (isLoggedIn && products.length === 0) {
        try {
          const dbproducts = await getProducts(token);
          // check to avoid infinite looping
          if (dbproducts.length > 0) {
            setProducts(dbproducts);
          } else {
            console.log("no products found");
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchProducts();
  }, [products, setProducts, isLoggedIn, token]);

  const doAddProduct = async (newProduct) => {
    try {
      const res = await addProduct(token, newProduct);
      const newproducts = [...products, res.data];
      setProducts(newproducts);
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = async (id, edittedProduct) => {
    try {
      await updateProduct(token, id, edittedProduct);
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
      const index = products.findIndex((product) => {
        return product.id === id;
      });

      if (index !== -1) {
        const newproducts = products.map((product, pindex) => {
          if (pindex === index) {
            return {
              ...product,
              edittedProduct,
            };
          } else {
            return product;
          }
        });
        setProducts(newproducts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const doDeleteProduct = async (id) => {
    try {
      await deleteProduct(token, id);
      const newproducts = products.filter((product) => {
        return product.id !== id;
      });

      setProducts(newproducts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProduct: doAddProduct,
        editProduct,
        deleteProduct: doDeleteProduct,
        searchedProducts,
        setSearchedProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("ProductContext must be used within its provider");
  return context;
};

export default ProductProvider;

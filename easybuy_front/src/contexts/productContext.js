import { createContext, useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./productApiRequests";

export const ProductContext = createContext({});

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(products);
      if (products.length === 0) {
        try {
          const dbproducts = await getProducts();
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
  }, [products, setProducts]);

  const doAddProduct = async (newProduct) => {
    try {
      const res = await addProduct(newProduct);
      const newproducts = [...products, res.data];
      setProducts(newproducts);
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = async (id, edittedProduct) => {
    try {
      await updateProduct(id, edittedProduct);
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
      await deleteProduct(id);
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
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

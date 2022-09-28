import React from "react";
import { useCategoryContext } from "../../contexts/categoryContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormLabel, FormControl, Button, Select } from "@chakra-ui/react";
import { useProductContext } from "../../contexts/productContext";
import ProductInputComponent from "./ProductInputComponent";
import CategorySelect from "./category/CategorySelect";

const emptyProduct = {
  productName: "",
  productDescription: "",
  productPrice: 0,
  categoryName: "",
};

const ProductFormComponent = () => {
  const { addProduct } = useProductContext();
  const [product, setProduct] = useState(emptyProduct);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(product);
      setProduct(emptyProduct);
      navigate("/");
      alert("Creating/adding Product added succesfully ");
    } catch (error) {
      alert(error.message, "Creating/adding Product update  didnt work");
    }
  };

  const onCategorySelect = (categoryName) => {
    setProduct({ ...product, categoryName: categoryName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel mt={4} mb={0}>
          category{" "}
        </FormLabel>
        <CategorySelect onSelect={onCategorySelect} />

        <FormLabel mt={4} mb={0}>
          name
        </FormLabel>

        <ProductInputComponent
          type="text"
          productKey="productName"
          product={product}
          setProduct={setProduct}
        />
        <FormLabel mt={4} mb={0}>
          description
        </FormLabel>
        <ProductInputComponent
          type="text"
          productKey="productDescription"
          product={product}
          setProduct={setProduct}
        />
        <FormLabel mt={4} mb={0}>
          price
        </FormLabel>
        <ProductInputComponent
          type="number"
          productKey="productPrice"
          product={product}
          setProduct={setProduct}
        />
        <Button my={4} colorScheme="blue" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default ProductFormComponent;

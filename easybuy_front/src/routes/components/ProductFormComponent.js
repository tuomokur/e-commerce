import React from "react";
import { useCategoryContext } from "../../contexts/categoryContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormLabel, FormControl, Button, Select } from "@chakra-ui/react";
import { useProductContext } from "../../contexts/productContext";
import ProductInputComponent from "./ProductInputComponent";

const emptyProduct = {
  itemName: "",
  itemDescription: "",
  itemPrice: 0,
  categoryName: "",
};

const ProductFormComponent = () => {
  const { categories } = useCategoryContext();
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

  const onCategorySelect = (e) => {
    setProduct({ ...product, categoryName: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel mt={4} mb={0}>
          category{" "}
        </FormLabel>
        <Select placeholder="Select Category" onChange={onCategorySelect}>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </Select>

        <FormLabel mt={4} mb={0}>
          name
        </FormLabel>

        <ProductInputComponent
          type="text"
          productKey="itemName"
          product={product}
          setProduct={setProduct}
        />
        <FormLabel mt={4} mb={0}>
          description
        </FormLabel>
        <ProductInputComponent
          type="text"
          productKey="itemDescription"
          product={product}
          setProduct={setProduct}
        />
        <FormLabel mt={4} mb={0}>
          price
        </FormLabel>
        <ProductInputComponent
          type="number"
          productKey="itemPrice"
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

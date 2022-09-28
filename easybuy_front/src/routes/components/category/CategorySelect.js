import { useCategoryContext } from "../../../contexts/categoryContext";
import { Select } from "@chakra-ui/react";
import { useState } from "react";

const CategorySelect = (props) => {
  const { categories } = useCategoryContext();
  const [category, setCategory] = useState("");
  const onChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    if (props.onSelect && typeof props.onSelect === "function") {
      props.onSelect(selectedCategory);
    }
  };

  return (
    <Select placeholder="Select Category" onChange={onChange} value={category}>
      {categories.map((category, index) => {
        return (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        );
      })}
    </Select>
  );
};

export default CategorySelect;

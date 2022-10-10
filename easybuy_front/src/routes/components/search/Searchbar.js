import React from "react";
import { useState } from "react";
import { Input, InputGroup, InputRightElement, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useProductContext } from "../../../contexts/productContext";
import { getProducts } from "../../../contexts/productApiRequests";
import CategorySelect from "../category/CategorySelect";

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const SearchBar = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [search, setSearch] = useState("");
  const { searchedProducts, setSearchedProducts } = useProductContext();
  const [categoryName, setCategoryName] = useState("");

  const onChange = async (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length === 0) {
      setIsInvalid(false);
    }
    const searchOnBackend = async () => {
      if (value.length > 0) {
        try {
          const searchedProducts = await getProducts(value, categoryName);
          setSearchedProducts(searchedProducts);
          setIsInvalid(false);
        } catch (error) {
          console.error(error);
          setIsInvalid(true);
        }
      }
    };

    const debounceSearchOnBackend = debounce(
      async () => await searchOnBackend()
    );
    await debounceSearchOnBackend();
  };

  const onCategorySelect = (selectedCategoryName) => {
    setCategoryName(selectedCategoryName);
  };

  console.log({ search });

  const productsAvailable = search.length > 0 && searchedProducts.length > 0;

  return (
    <Box m={2} p={4} w="50%">
      <CategorySelect onSelect={onCategorySelect} />
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          onChange={onChange}
          type={"Search"}
          placeholder="Search"
          value={search}
        />
        <InputRightElement width="4.5rem">
          <SearchIcon />
        </InputRightElement>
        <br />
        {productsAvailable ? <p>No search results to display</p> : null}
        {isInvalid ? <p>Unable to get search results</p> : null}
      </InputGroup>
    </Box>
  );
};
export default SearchBar;

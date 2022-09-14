import React from "react";
import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import { useProductContext } from "../../contexts/productContext";
import { getProducts } from "../../contexts/productApiRequests";

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
  const [show, setShow] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [search, setSearch] = useState("");
  const { searchedProducts, setSearchedProducts } = useProductContext();

  const onChange = async (e) => {
    const value = e.target.value;
    setSearch(value);
    const searchOnBackend = async () => {
      try {
        const searchedProducts = await getProducts(value);
        setSearchedProducts(searchedProducts);
        setIsInvalid(false);
      } catch (error) {
        console.error(error);
        setIsInvalid(true);
      }
    };

    const debounceSearchOnBackend = debounce(
      async () => await searchOnBackend()
    );
    await debounceSearchOnBackend();
  };

  const productsAvailable = searchedProducts.length > 0;
  return (
    <Box m={2} p={4}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          onChange={onChange}
          type={show ? "text" : "Search"}
          placeholder="Search"
          value={search}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
        {productsAvailable ? <p>No search results to display</p> : null}
        {isInvalid ? <p>Unable to get search results</p> : null}
      </InputGroup>
    </Box>
  );
};
export default SearchBar;

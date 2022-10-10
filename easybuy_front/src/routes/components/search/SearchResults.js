import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useProductContext } from "../../../contexts/productContext";

const SearchResults = () => {
  const { searchedProducts } = useProductContext();

  if (searchedProducts.length === 0) return null;

  <UnorderedList>
    {searchedProducts.map((searchedProduct, index) => {
      return (
        <ListItem key={index.toString()}>
          {searchedProduct.productName}
        </ListItem>
      );
    })}
  </UnorderedList>;
};

export default SearchResults;

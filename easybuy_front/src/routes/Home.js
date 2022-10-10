import LandingImage from "./components/LandingImage.js";
import RecentItems from "./components/RecentItems.js";
import SearchBar from "./components/search/Searchbar.js";
import { Box, Stack } from "@chakra-ui/react";
import AddProduct from "./components/productComponents/ProductAddBtn.js";

const Home = () => {
  return (
      <Box>
        <Stack isInline>
          <LandingImage />
          <SearchBar />
        </Stack>
        <AddProduct />
        <RecentItems />
      </Box>
  );
};
export default Home;

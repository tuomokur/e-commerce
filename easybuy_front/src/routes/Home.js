import LandingImage from "./components/LandingImage.js";
import RecentItems from "./components/RecentItems.js";
import SearchBar from "./components/search/Searchbar.js";
import { Box, Stack } from "@chakra-ui/react";
import SearchResults from "./components/search/SearchResults.js";

const Home = () => {
  return (
    <Box>
      <Stack isInline>
        <LandingImage />
        <SearchBar />
        <SearchResults />
      </Stack>
      <RecentItems />
    </Box>
  );
};
export default Home;

import LandingImage from "./components/LandingImage.js";
import RecentItems from "./components/RecentItems.js";
import SearchBar from "./components/Searchbar.js";
import { Box, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
      <Box>
        <Stack isInline>
          <LandingImage />
          <SearchBar />
        </Stack>
        <RecentItems />
      </Box>
  );
};
export default Home;

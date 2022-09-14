import LandingImage from "./components/LandingImage.js";
import RecentItems from "./components/RecentItems.js";
import SearchBar from "./components/Searchbar.js";
import { Flex, Spacer } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="main-container">
      <Flex>
        <LandingImage />
        <Spacer />
        <SearchBar />
        {/* <RecentItems /> */}
      </Flex>
    </div>
  );
};
export default Home;

import {
  Box,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const LandingImage = () => {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80')"
      w="50%"
      h="50vh"
      m={2}
      p={4}
      color="white"
    >
      <Box as="h1" fontSize="3xl" m={6}>
        Welcome to
        <Text as="mark">EasyBuy </Text>
        <br />
        <Text>What can you do here?</Text>
        <Text>
          <UnorderedList>
            <ListItem>Buy other's items</ListItem>
            <ListItem>Sell your items</ListItem>
          </UnorderedList>
        </Text>
      </Box>
    </Box>
  );
};

export default LandingImage;

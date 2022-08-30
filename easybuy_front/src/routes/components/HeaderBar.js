import React from "react";
import { Box, Stack, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
const HeaderBar = () => {
  return (
    <Box>
      <Flex
        bg={"#EEDFDF"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={4}>
          <Box>
            <Link to={"/"}>
              <Text as="i" fontSize="3xl" color="black">
                {"EB"}
              </Text>
            </Link>
          </Box>
        </Stack>
        <Spacer />
        <Box>
          <Text as="b" fontSize="3xl" color="black">
            {"EasyBuy"}
          </Text>
        </Box>
        <Spacer />
        <Stack justifyContent={"flex-end"} direction={"row"} spacing={6}>
          <Link to={false ? "/logout" : "/login"}>
            <Button
              variant={"outline"}
              fontSize={"sm"}
              color={"black"}
              bg={"white.400"}
              _hover={{
                bg: "gray.300",
              }}
            >
              {false ? "Logout" : "Login"}
            </Button>
          </Link>
          {false ? (
            <Link to="/register">
              <Button
                variant={"outline"}
                fontSize={"sm"}
                color={"black"}
                bg={"white.400"}
                _hover={{
                  bg: "gray.300",
                }}
              >
                "Register"
              </Button>
            </Link>
          ) : null}
        </Stack>
      </Flex>
    </Box>
  );
};
export default HeaderBar;
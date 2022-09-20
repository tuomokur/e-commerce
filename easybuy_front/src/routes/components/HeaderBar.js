import React from "react";
import { Box, Stack, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/authContext";
import Settings from "../Settings.js";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import LogoutModal from "./LogoutModal.js";

const HeaderBar = () => {
  const { isLoggedIn } = useAuthContext();

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
          {!isLoggedIn ? <LoginModal /> : null}
          {!isLoggedIn ? <RegisterModal /> : null}
          {isLoggedIn ? <Settings /> : null}
          {isLoggedIn ? <LogoutModal /> : null}
        </Stack>
      </Flex>
    </Box>
  );
};
export default HeaderBar;

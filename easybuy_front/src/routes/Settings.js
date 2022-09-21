import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";

const Settings = () => {
  const { modifyUserData } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    postNumber: "",
    phone: "",
    username: "",
    password: "",
    email: "",
  });

  const handleOnClose = () => {
    onClose();
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await modifyUserData(user);
      onClose();
      setUser("");
      navigate("/");
      alert(" Settings succesfull. You can change Settings to your account. ");
    } catch (error) {
      alert(error.message, "Settings update  didnt work");
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        variant={"outline"}
        fontSize={"sm"}
        color={"black"}
        bg={"white.400"}
        _hover={{ bg: "gray.300" }}
      >
        Settings
      </Button>
      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings a new user account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel mt={4} mb={0}>
                  firstName
                </FormLabel>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />

                <FormLabel mt={4} mb={0}>
                  lastName
                </FormLabel>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />

                <FormLabel mt={4} mb={0}>
                  streetAddress
                </FormLabel>
                {/* pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$"  */}
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, streetAddress: e.target.value })
                  }
                />

                <FormLabel mt={4} mb={0}>
                  postNumber
                </FormLabel>
                <Input
                  type="number"
                  onChange={(e) =>
                    setUser({ ...user, postNumber: e.target.value })
                  }
                />

                <FormLabel mt={4} mb={0}>
                  phone
                </FormLabel>
                <Input
                  type="tel"
                  onChange={(e) =>
                    setUser({ ...user, phoneNumber: e.target.value })
                  }
                  placeholder=" +358401234568"
                />

                <FormLabel mt={4} mb={0}>
                  Username
                </FormLabel>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  minLength="4"
                  maxLength="40"
                />

                <FormLabel mt={4} mb={0}>
                  Password
                </FormLabel>
                <InputGroup size="md">
                  <Tooltip label="Your password should be minimum of 8 characters long and have at least one capital and lower case letter, a number and a special character ( @$!%*? ). ">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Password"
                      minLength="8"
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    />
                  </Tooltip>
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <FormLabel mt={4} mb={0}>
                  password
                </FormLabel>
                <Input
                  type="text"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />

                <FormLabel mt={4} mb={0}>
                  email
                </FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="example@gmail.com"
                />

                <Button my={4} colorScheme="blue" type="submit">
                  {" "}
                  Submit{" "}
                </Button>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Settings;

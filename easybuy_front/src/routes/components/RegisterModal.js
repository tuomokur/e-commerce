import React from "react";
import RegisterForm from "./RegisterForm.js";
import {
        Button,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalBody,
        ModalCloseButton,
        useDisclosure,
} from "@chakra-ui/react";
const RegisterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant={"outline"} fontSize={"sm"} color={"black"} bg={"white.400"}_hover={{ bg: "gray.300",}}>
        Register
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Register a new user account
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <RegisterForm />
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default RegisterModal
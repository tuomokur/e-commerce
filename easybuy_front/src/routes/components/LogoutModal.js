import { useAuthContext} from "../../contexts/authContext.js"
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
const Logout = () => {
    const { logout } = useAuthContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <>
        <Button onClick={onOpen} variant={"outline"} fontSize={"sm"} color={"black"} bg={"white.400"}_hover={{ bg: "gray.300",}}>
            Logout
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                <ModalHeader>
                    Are you sure you want to log out?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Button m={4} colorScheme="blue" onClick={logout}> Yes </Button>
                    <Button m={4} colorScheme="red" onClick={onClose}> No </Button>
                </ModalBody>
                </ModalContent>
        </Modal>
    </>
  )
}
export default Logout
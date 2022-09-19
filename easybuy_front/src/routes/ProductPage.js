import ProductContent from "./components/productComponents/ProductContent.js";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Flex,
  Container,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const ProductPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container my={8} maxW='80vw'  >
      <Box >
        <Button mr='5px' size='sm' rightIcon={<EditIcon />} colorScheme='yellow' variant={"ghost"} >
          Edit
        </Button>
        <Button onClick={onOpen} size='sm' rightIcon={<DeleteIcon />} colorScheme='red' variant={"ghost"} >
          Delete
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Are you sure to delete this item?
            </ModalHeader>
            <ModalBody>
              <Button colorScheme='red' mb='15px' mr='15px'> Yes </Button>
              <Button colorScheme='green' mb='15px' mr='15px' onClick={onClose}> No </Button>
            </ModalBody>
          </ModalContent>
      </Modal>
        <Flex 
          bg='#f7f7f7'
          align='center'
          justify='center'
          border='1px'
          borderColor='#888'
          borderRadius='8px'>
            <ProductContent /> 
        </Flex>
      </Container>
    </>
  )
}
export default ProductPage
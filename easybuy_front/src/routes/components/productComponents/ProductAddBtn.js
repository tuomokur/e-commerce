import { Box, Button } from "@chakra-ui/react";
import {
	Modal, 
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import AddProductForm from "./AddProduct.js";

const AddButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return(
		<Box>
			<Button onClick={onOpen}>Add Product</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<AddProductForm />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export default AddButton;
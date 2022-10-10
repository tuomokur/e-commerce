import { useState } from "react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input, 
	Button, 
	Textarea,
} from "@chakra-ui/react";

const AddProductForm = () => {
	
	return(
		<form onSubmit="">
			<FormControl isRequired>
			<FormLabel>Item Name</FormLabel>
			<Input type="text" placeHolder="e.g. Nokia phone" />
			
			<FormLabel>Item Price</FormLabel>
			<Input type="number" placeHolder="100" />
			
			<FormLabel>Description</FormLabel>
			<Textarea placeholder="Describe your product details" maxLength="500" />
			
			<FormLabel>Item Pictures</FormLabel>
			<Input type="number" placeHolder="100" />

			<Button my={4} colorScheme="blue" type='submit'>Send</Button>
		</FormControl>
		</form>
	);
}

export default AddProductForm;




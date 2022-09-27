import React, { useContext } from "react";
import { 
    Box,
    Badge,
    Image,
    Heading, 
    HStack,
    Flex,
    VStack } from "@chakra-ui/react";
import { ProductContext } from "../../contexts/productContext";

const ProductCard = () => {
    const {products, setProducts} = useContext(ProductContext);
    return (
        <Box px="250px">
            <Flex
            flexDirection="column">
                <VStack>
                <Heading 
             textAlign="center"
             color="teal.500"
             letterSpacing="1px"
             pb="5px"
             marginTop="20px"
            > 
                Recent Items
            </Heading>
            <HStack spacing="10px">
                {products.slice(-5).map(product => (
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m={2} key={product._id}>
                    <Image src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={product.productName} />
                    <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {product.productName}
                    </Box>
                    </Box>
        
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        Price: {product.productPrice} euro
                    </Box>
        
                    <Box fontSize="sm">
                        {product.productDescription}
                    </Box>
                </Box>
            </Box>
                ))}
            </HStack>
            </VStack>
            </Flex>
        </Box>
    );
}

export default ProductCard;
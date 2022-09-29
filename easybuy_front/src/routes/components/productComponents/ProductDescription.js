import { useProductContext } from "../../../contexts/productContext.js"
import { Center, Container } from "@chakra-ui/react"

const ProductDescription = () => {
  const product = useProductContext();

  return (
    <>
        <Container>
          <Center my={4}>
            <h1>{product.productName} </h1>
          </Center>
            <p>{product.productDescription}</p>
        </Container>
    </>
  )
}
export default ProductDescription
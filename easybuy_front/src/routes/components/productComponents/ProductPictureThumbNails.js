import { useProductContext } from "../../../contexts/productContext.js"
import { Box, Container, Stack, Image } from '@chakra-ui/react'

const ProductPictureThumbNails = () => {
  const product = useProductContext();

  return (
    <>
      <Container height='100%' my={4}>
        <Stack direction={'row'} spacing='2em' >
                {product.map((productPictures) => (  
                  <Box>
                    <Image
                      objectFit='fit'
                      src={product.productPictures}
                      alt='product image'
                    />
                  </Box>
                ))}
          </Stack>
        </Container>
    </>
  )
}
export default ProductPictureThumbNails
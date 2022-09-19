import { Box, Container, Stack, Image } from '@chakra-ui/react'

const ProductPictureThumbNails = () => {
  return (
    <>
      <Container height='100%' my={4}>
        <Stack direction={'row'} spacing='2em' >
              <Box>
                {/* PLACHOLDER IMAGES
                TODO: CREATE CAROUSEL AND LOOP IMAGES
                IN IT */}
                
                <Image
                  objectFit='fit'
                  src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Old-PC.jpg'
                  alt='product image'
                  />
              </Box>
              <Box>
                <Image
                  objectFit='fit'
                  src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Old-PC.jpg'
                  alt='product image'
                  />
              </Box>
              <Box>
                <Image
                  objectFit='fit'
                  src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Old-PC.jpg'
                  alt='product image'
                  />
              </Box>
          </Stack>
        </Container>
    </>
  )
}
export default ProductPictureThumbNails
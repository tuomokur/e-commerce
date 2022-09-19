import { Image } from '@chakra-ui/react'

const ProductPicture = () => {
  return (
     <>
    {/*  PLACEHOLDER IMAGE 
         TODO: FETCH IMAGE FROM DB */}
        <Image
          m='auto'
          objectFit='fit'
          width='100%'
          height='100%'
          src='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/Old-PC.jpg'
          alt='product image'
          />
    </>
  )
}
export default ProductPicture
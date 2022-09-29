import { useProductContext } from "../../../contexts/productContext.js"
import { Image } from '@chakra-ui/react'

const ProductPicture = () => {
  const product = useProductContext();

  return (
     <>
        <Image
          m='auto'
          objectFit='fit'
          width='100%'
          height='100%'
          src={product.productImages}
          alt='product image'
          />
    </>
  )
}
export default ProductPicture
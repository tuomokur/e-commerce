import ProductPicture from './ProductPicture.js';
import ProductPictureThumbNails from './ProductPictureThumbNails.js';
import ProductInfo from './ProductInfo.js';
import ProductDescription from './ProductDescription.js';
import { 
        Grid,
        GridItem,
        } from '@chakra-ui/react'

const ProductContent = () => {
  return (
    <>
        <Grid
            templateAreas={`"img img info"
                            "thumb thumb ."
                            "txt txt ." 
                            `} 
            templateRows={'50vh 10vh 40vh'}
            templateColumns={'1fr 1fr 1fr'}
            gap={4}
            row={4}
            p={4}
            >
                <GridItem area={'img'} bg='blue'>
                    <ProductPicture />
                </GridItem>
                <GridItem bg='#dbdbdb' area={'info'} sx={{borderRadius:'8px'}}>
                    <ProductInfo />
                </GridItem>
                <GridItem  area={'thumb'}>
                    <ProductPictureThumbNails />
                </GridItem>
                <GridItem bg='#f2f2f2' area={'txt'} sx={{borderRadius:'8px'}}>
                    <ProductDescription />
                </GridItem>
        </Grid>
    </>
  )
}
export default ProductContent
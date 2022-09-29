import { useProductContext } from "../../../contexts/productContext.js"
import "./ProductInfoStyle.css";

const ProductInfo = () => {
  const product = useProductContext();
  return (
    <>
        <div className='infoBox'>
        <p id='priceTag'>{product.productPrice}</p>
            <ul>
              <li>{product.productName}</li>
              <li>{product.userId.postNumber}</li>
              <br/>
              <li> <b>Contact: </b> </li>
              <li> {product.userId.firstName} {product.userId.lastName}</li> {/* TODO: Solve how to do this */}     
              <li> {product.userId.phone}</li>
              <li> {product.userId.email}</li>
              <li> {product.userId.streetAddress}</li>
            </ul>
        </div>         
    </>
  )
}
export default ProductInfo
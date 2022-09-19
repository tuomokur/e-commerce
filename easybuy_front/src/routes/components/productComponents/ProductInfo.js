import "./ProductInfoStyle.css";

const ProductInfo = () => {

  return (
    <>
        {/* PLACEHOLDER DATA
        TODO: FETC PRODUCT PRICE AND SELLER INFO FROM DB */}
        <div className='infoBox'>
        <p id='priceTag'> 500 € </p>
            <ul>
              {/* <li id='priceTag'> 500 € </li> */}
              <li> Title: Conputer</li>
              <li> Type: Sell </li>
              <li> Location: Keskusta </li>
              <br/>
              <li> <b>Contact: </b> </li>
              <li> Name: Linus Tuurvalds </li>
              <li> Phone: 1232456 </li>
              <li> eMail: programmer@hotmail.com </li>
              <li> Address: No. </li>
            </ul>
        </div>         
    </>
  )
}
export default ProductInfo
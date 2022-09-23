import { Input } from "@chakra-ui/react";

const ProductInputComponent = (props) => {
  const { productKey, product, setProduct, type } = props;
  return (
    <Input
      type={type}
      onChange={(e) => setProduct({ ...product, [productKey]: e.target.value })}
    />
  );
};

export default ProductInputComponent;

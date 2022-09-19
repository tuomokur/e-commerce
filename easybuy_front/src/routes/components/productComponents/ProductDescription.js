import { Center, Container } from "@chakra-ui/react"

const ProductDescription = () => {
  return (
    <>
        <Container>
          <Center my={4}>
            {/* PLACEHOLDER TEXTS
            TODO: FETCH DESCRIPTION TEXTS */}
            <h1> Item title here </h1>
          </Center>
            <p> 
                Description text here
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                Aliquam sit quasi doloremque 
                soluta temporibus blanditiis 
                sint ratione error,
                  repellat adipisci?
                  Description text here
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                Aliquam sit quasi doloremque 
                soluta temporibus blanditiis 
                sint ratione error,
                  repellat adipisci?
                  Description text here
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                Aliquam sit quasi doloremque 
                soluta temporibus blanditiis 
                sint ratione error,
                  repellat adipisci?
            </p>
        </Container>
    </>
  )
}

export default ProductDescription
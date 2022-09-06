import {
    Box, 
    Container,
    Link,
    Stack,
    Text, 
    useColorModeValue,
} from "@chakra-ui/react";
import "./css/footer.css"

const Footer = () => {
    return(
    <div className="main-footer">
    <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            spacing={4}
            justify={'center'}
            align={'center'}>
            
            <Stack direction={'row'} spacing={6}>
            <Link to={"/"}>
                <Text as="i" fontSize="1xl" color="black">
                    {"EB"}
                </Text>
            </Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact</Link>
            </Stack>
        </Container>

        <Box
            borderTopWidth={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center' }}
                align={{ base: 'center', md: 'center' }}>
            <Text>Copyright {new Date().getFullYear()} © EasyBuy</Text>
            </Container>
        </Box>
    </Box>
    </div>
    );
}

export default Footer;
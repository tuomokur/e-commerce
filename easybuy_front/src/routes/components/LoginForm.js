import React from "react"
import { tryLogin } from "../../contexts/apiRequests.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    useDisclosure,
  } from "@chakra-ui/react";
const LoginForm = () => {
    const [show, setShow] = React.useState(false);
    const { onClose } = useDisclosure();
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => setShow(!show);
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
          await tryLogin( username, password );
          onClose();
          navigate('/login');
          console.log('Login succesful');
        }catch(e){
          console.log(e);
          alert("Something went wrong, please try again");
          navigate('/');
        }
    }
  return (
    <>
        <form onSubmit={handleLogin}>        
            <FormControl isReguired>
                <FormLabel mt={4} mb={0}>Username</FormLabel>
                <Input type='text'onChange={(e) => setUserName(e.target.value)}/>

                <FormLabel mt={4} mb={0}>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                </InputGroup>
                <Button my={4} colorScheme="blue" type='submit'> Login </Button>
            </FormControl>
        </form>
    </>
  )
}
export default LoginForm
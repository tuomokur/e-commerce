import React from "react";
import { addUser} from "../../contexts/apiRequests.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    useDisclosure,
    Tooltip,
} from "@chakra-ui/react";

const RegisterForm = () => {
    const [show, setShow] = React.useState(false);
    const { onClose } = useDisclosure();
    const navigate = useNavigate();
    const handleClick = () => setShow(!show);

    const [user, setUser] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        streetAddress: '',
        postNumber: '',
        phoneNumber: '',
        email: '',
      });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await addUser(user)
          onClose();
          navigate('/');
          alert("Registration succesfull. You can now login to you account.");
        } catch(e) {
          alert("Something went wrong, please try again");
          navigate('/');
          console.log(e);
        }
      }; 
  return (
    <>
        <form onSubmit={handleSubmit}>
            <FormControl isRequired >
                <FormLabel  mt={4} mb={0}>Username</FormLabel>
                <Input  type='text' onChange={(e) => setUser({...user, username:(e.target.value)})} minLength="4" maxLength="40" />
                
                <FormLabel mt={4} mb={0}>Password</FormLabel>
                <InputGroup size='md'>
                    <Tooltip label="Your password should be minimum of 8 characters long and have at least one capital and lower case letter, a number and a special character ( @$!%*? ). " >
                        <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Password'
                        minLength="8"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        onChange={(e) => setUser({...user, password:(e.target.value)})}
                        />
                    </Tooltip>
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                </InputGroup>

                <FormLabel mt={4} mb={0}>First name</FormLabel>
                <Input  type='text' onChange={(e) => setUser({...user, firstName:(e.target.value)})}/>

                <FormLabel mt={4} mb={0}>Last name</FormLabel>
                <Input type='text' onChange={(e) => setUser({...user, lastName:(e.target.value)})}/>

                <FormLabel mt={4} mb={0}>Street address</FormLabel>
                <Input type='text' onChange={(e) => setUser({...user, streetAddress:(e.target.value)})} />

                <FormLabel mt={4} mb={0}>Post number</FormLabel>
                <Input type='number' onChange={(e) => setUser({...user, postNumber:(e.target.value)})}/>

                <FormLabel mt={4} mb={0}>Phone number</FormLabel>
                <Input type='tel' onChange={(e) => setUser({...user, phoneNumber:(e.target.value)})}placeholder=' +358401234568' />
                
                <FormLabel mt={4} mb={0}>Email</FormLabel>
                <Input type='email' onChange={(e) => setUser({...user, email:(e.target.value)})} placeholder="example@gmail.com"  />

                <Button my={4} colorScheme="blue" type='submit'> Submit </Button>
            </FormControl>
        </form> 
    </>
  )
}
export default RegisterForm
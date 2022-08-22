import React from 'react'
import { Box } from "@chakra-ui/react";
import { Input, Button } from '@chakra-ui/react'
import { FormControl,
        FormLabel,
        FormErrorMessage,
        FormHelperText,
        InputLeftAddon 
        } from '@chakra-ui/react';
import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalBody,
        ModalCloseButton,
} from '@chakra-ui/react'

function register() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register a new user account</ModalHeader>
            <ModalCloseButton />
          <ModalBody>
            <FormControl isReguired>
                  <FormLabel>First name</FormLabel>
                  <Input type='text'/>

                  <FormLabel>Last name</FormLabel>
                  <Input type='text' />

                  <FormLabel>Street address</FormLabel>
                  <Input type='text' pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$" />

                  <FormLabel>Post number</FormLabel>
                  <Input type='number' />

                  <FormLabel>Phone number</FormLabel>
                  <InputLeftAddon children='+358' />
                  <Input type='tel' placeholder='phone number' />

                  <FormLabel>Email</FormLabel>
                  <Input placeholder="example@gmail.com" type='email' />

                  <FormLabel>Username</FormLabel>
                  <Input type='text' minlength="4" maxlength="40" />

                  <FormLabel>Password</FormLabel>
                  <Input type='password' placeholder="Min 8 characters, at least 1 upper and lowercase letter, 1 number and 1 special character" minlength="8" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/>

                  <Input type="submit" />

                  <Button mr={3} colorScheme="blue" type='submit'> Submit </Button>
              </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  )
}

export default register






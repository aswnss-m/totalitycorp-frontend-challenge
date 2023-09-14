import React from 'react'
import { Flex, Spacer,Box,Button,Heading,ButtonGroup } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' p={4} bg={'#862633'}>
  <Box p='2' color={'#fff'}>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Cart</Button>
  </ButtonGroup>
</Flex>
  )
}

export default Navbar

import React from 'react'
import { Flex, Spacer,Box,Button,Heading,ButtonGroup,Avatar,AvatarBadge,Icon } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'

function Navbar() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' p={4} bg={'#862633'}>
  <Box p='2' color={'#fff'}>
    <Heading size='md'>O Shopy</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2' alignItems={'center'}>
    <Button colorScheme='teal'>Sign Up</Button>
    <Avatar bg={'teal'} icon={<Icon as={FiShoppingCart}
                                color={'white'}
                                alignSelf={'center'}/>}>
    <AvatarBadge boxSize='1.25em' bg='green.500' />
  </Avatar>
  </ButtonGroup>
</Flex>
  )
}

export default Navbar

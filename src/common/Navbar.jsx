import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Flex,
    Spacer,
    Box,
    Button,
    Heading,
    ButtonGroup,
    Avatar,
    AvatarBadge,
    Link,
    Icon
} from '@chakra-ui/react'
import {FiShoppingCart} from 'react-icons/fi'

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(true)
    const nav = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLoggedIn(true)
        }
    }, [])
    const handleClick = (link) => {
        nav(link)
    }

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'
            p={4}
            bg={'#862633'}>
            <Box p='2'
                color={'#fff'}
                onClick={
                    () => {
                        handleClick('/')
                    }
            }>
                <Heading size='md'>O Shopy</Heading>
            </Box>
            <Spacer/>
            <ButtonGroup gap='2'
                alignItems={'center'}>
                {
                loggedIn ? (
                    <>
                        <Button bg={'#f555'}
                            color={'white'}
                            _hover={
                                {bg: '#f558'}
                        }>Logout</Button>
                        <Button colorScheme='teal'
                            bg={'#f555'}
                            color={'white'}
                            _hover={
                                {bg: '#f558'}
                            }
                            onClick={
                                () => {
                                    handleClick('/cart')
                                }
                        }>
                            <Icon as={FiShoppingCart}
                                alignSelf={'center'}/>
                        </Button>
                    </>
                ) : <Button colorScheme='teal'
                        bg={'#f555'}
                        color={'white'}
                        _hover={
                            {bg: '#f558'}
                    }>Login</Button>
            } </ButtonGroup>
        </Flex>
    )
}

export default Navbar

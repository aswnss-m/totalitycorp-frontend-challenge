import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip
} from '@chakra-ui/react'
import {BsStar, BsStarFill, BsStarHalf} from 'react-icons/bs'
import {TiTick} from 'react-icons/ti'
import {FiShoppingCart} from 'react-icons/fi'
import React, {useState, useEffect} from 'react'


// const data = {
//     isNew: true,
//     imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
//     name: 'Wayfarer Classic',
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34
// }


function Rating({rating, numReviews}) {

    return (
        <Box display="flex" alignItems="center">
            {
            Array(5).fill('').map((_, i) => {
                const roundedRating = Math.round(rating * 2) / 2
                if (roundedRating - i >= 1) {
                    return (
                        <BsStarFill key={i}
                            style={
                                {marginLeft: '1'}
                            }
                            color={
                                i < rating ? 'teal.500' : 'gray.300'
                            }/>
                    )
                }
                if (roundedRating - i === 0.5) {
                    return <BsStarHalf key={i}
                        style={
                            {marginLeft: '1'}
                        }/>
                }
                return <BsStar key={i}
                    style={
                        {marginLeft: '1'}
                    }/>
            })
        }
            <Box as="span" ml="2" color="gray.600" fontSize="0.8em">
                {numReviews}
                review{
                numReviews > 1 && 's'
            } </Box>
        </Box>
    )
}

function ItemCard({props}) {
    const {
        name,
        price,
        rating,
        numReviews,
        Images,
        id,
        category,
    } = props
    
    const [cart, setCart] = useState(sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [])
    const [inCart, setInCart] = useState(false)
    useEffect(() => {
        const found = cart.find((item) => item.id === id)
        if (found) {
            setInCart(true)
        } else {
            setInCart(false)
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, id])
    const addToCart = () => {
        const check = cart.every((item) => {
            return item.id !== id
        })
        if (check) {
            const data = {
                id: id,
                quantity: 1
            }
            setCart([...cart, data])
            sessionStorage.setItem('cart', JSON.stringify(cart))
        } else {
            alert("The product has been added to cart.")
        }
    }

    return (
        <Box bg={
                useColorModeValue('white', 'gray.800')
            }
            w={300}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">

            <Circle size="10px" position="absolute"
                top={2}
                right={2}
                bg="red.200"/>

            <Image src={
                    Images.std
                }
                alt={
                    `Picture of ${name}`
                }
                roundedTop="lg"/>

            <Box p="6">
                <Box display="flex" alignItems="baseline">

                    <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                        {category} </Badge>
                </Box>
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box fontSize="md" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        {name} </Box>
                        {inCart ? (<Tooltip label="In Cart" bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'0.8em'}>
                        <Box>
                            <Icon as={TiTick}
                                color={'green.500'}
                                h={7}
                                w={7}
                                alignSelf={'center'}/>
                        </Box>
                    </Tooltip>):(
                        <Tooltip label="Add to cart" bg="white"
                        
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'0.8em'}>
                        <Box onClick={addToCart}>
                            <Icon as={FiShoppingCart}
                                h={7}
                                w={7}
                                alignSelf={'center'}/>
                        </Box>
                    </Tooltip>
                    )}
                    
                </Flex>
                

                <Flex justifyContent="space-between" alignContent="center">
                    <Rating rating={rating}
                        numReviews={numReviews}/>
                    <Box fontSize="2xl"
                        color={
                            useColorModeValue('gray.800', 'white')
                    }>
                        <Box as="span"
                            color={'gray.600'}
                            fontSize="md">
                            ₹
                        </Box>
                        {
                        price.toFixed(2)
                    } </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default ItemCard

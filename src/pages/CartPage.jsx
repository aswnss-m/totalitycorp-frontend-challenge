import {
    Card,
    Image,
    Heading,
    Stack,
    Text,
    Divider,
    Button,
    Flex,
    Spacer
} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {products} from '../assets'


function CartPage() {
    const nav = useNavigate()
    const [cart, setCart] = useState(sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [])
    const [cartProducts, setCartProducts] = useState([])

    // load product details of cart item
    useEffect(() => {
        const cartProducts = []
        products.forEach(product => {
            cart.forEach(item => {
                if (product.id === item.id) {
                    cartProducts.push({
                        ...product,
                        quantity: item.quantity
                    })
                }
            })
        })
        setCartProducts(cartProducts)
    }, [])

    // handle quantity change
    // TODO: Remove item from cart if quantity is 0
    const handleQuantity = (id, add) => {
        const newCart = cartProducts.map((item) => {
            if (item.id === id) {
                if (add) {
                    item.quantity += 1
                } else if (item.quantity > 0) {
                    item.quantity -= 1
                }
            }
            return item
        })
        setCartProducts(newCart)
    }
    
    // Calcualte the cost
    const [cost, setCost] = useState(0)
    useEffect(() => {
        let cost = 0
        cartProducts.forEach(item => {
            console.log(item.name, item.quantity, item.price)
            cost += item.quantity * item.price
        })
        setCost(cost)
    }, [cartProducts])


    return (
        <Flex direction={'row'}
            wrap={'wrap'}
            justifyContent={'center'}
            gap={10}
            py={10}>
            {
            cartProducts.map((product) => {
                return (
                    <Card key={
                            product.id
                        }
                        w={'95%'}
                        maxW={1200}
                        borderRadius='lg'
                        overflow='hidden'
                        direction={
                            {
                                base: 'column',
                                sm: 'row'
                            }
                        }
                        gap={'1em'}
                        alignItems={'center'}>

                        <Image w={'10em'}
                            src={
                                product.Images.std
                            }
                            alt={
                                product.name
                            }/>

                        <Stack>
                            <Heading size={'sm'}>
                                {
                                product.name
                            }</Heading>
                            <Text>{
                                product.category
                            }</Text>
                        </Stack>

                        <Spacer/>

                        <Stack mr={'1em'}
                            w={'8em'}>
                            <Text>${
                                product.price
                            }</Text>
                            <Flex alignContent={'center'}
                                placeItems={'center'}
                                gap={'1em'}>
                                <Button onClick={
                                    () => {
                                        handleQuantity(product.id, false)
                                    }
                                }>-</Button>
                                <Text>{
                                    product.quantity
                                }</Text>
                                <Button onClick={
                                    () => {
                                        handleQuantity(product.id, true)
                                    }
                                }>+</Button>
                            </Flex>
                        </Stack>
                    </Card>
                )
            })
        }
            <Divider/>
            <Flex direction={'column'}
                gap={5}
                w={'95%'}
                maxW={1200}>
                <Heading size={'md'}>Total Cost: ${cost}</Heading>
                <Button colorScheme={'teal'} onClick={()=>{
                    nav('/checkout', {state: {cartProducts, cost}})
                }}>Checkout</Button>
            </Flex>
        </Flex>
    )
}

export default CartPage

import {
    Card,
    Image,
    Box,
    Heading,
    Stack,
    CardBody,
    Text,
    CardFooter,
    Button,
    Flex
} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import { products } from '../assets'
function CartPage() {
    const [cart, setCart] = useState(sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [])
    const[cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart))
        cart.map((item) => {
            const found = products.find((product) => product.id === item.id)
            setCartProducts([...cartProducts, found])
        })
    }, [cart])
    console.log(cartProducts)
    return (
        <Flex direction={'row'} wrap={'wrap'} gap={10}>
         {
            cartProducts.map((product) => {
                return (
                <Card key={product.id} maxW='sm' borderRadius='lg' overflow='hidden'  direction={{ base: 'column', sm: 'row' }}>
                    <Box boxSize={'sm'}>
                    <Image src={product.Images.std} alt={product.name} />
                    </Box>
                    <Stack>
                        <Heading size={'sm'}>{product.name}</Heading>
                        <Text>{product.category}</Text>
                        <Text>{product.price}</Text>
                        <Button colorScheme='teal'>Buy Now</Button>
                    </Stack>
                  </Card>
                )
            })
         }
        </Flex>
    )
}

export default CartPage

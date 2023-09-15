import { useLocation,useNavigate } from "react-router-dom"
import { Container,VStack,Heading,Text,Button,Input,Textarea, Divider, Flex,Spacer } from "@chakra-ui/react";
function Checkout() {
  const products = useLocation().state.cartProducts;
  const cost = useLocation().state.cost;
  if(!products || !cost) {
    const nav = useNavigate()
    nav('/')
  }

  return (
    <div>
      <Container my={'1em'} minH={'85vh'}>
        <Heading>Checkout</Heading>
        <VStack spacing={4} mt={'1em'}>
          <Text>Enter your details</Text>
          <Input placeholder={'Name'} />
          <Input placeholder={'Email'} />
          <Input placeholder={'Phone'} />
          <Textarea placeholder={'Address'} />
          <Button colorScheme={'teal'}>Place Order</Button>
        </VStack>
      <Divider my={'2em'}/> 
        <Heading fontSize={'md'}>Products</Heading>
        <Flex spacing={4} mt={'1em'} alignItems={'space-evenly'} flexDirection={'column'} gap={'1em'}>
          {
            products.map((item) => {
              return (
              <Flex key={item.id} >
                  <Text>{item.name} x {item.quantity}</Text>
                  <Spacer />
                  <Text>{item.price}</Text>
                </Flex>
                  )
                })
          }
        </Flex>
          <Divider my={'1em'} />
          <Flex>
            <Text fontWeight={'bold'}>Total</Text>
            <Spacer />
            <Text fontWeight={'bold'}>{cost}</Text>
          </Flex>

      </Container>
    </div>
  )
}

export default Checkout

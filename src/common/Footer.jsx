import { Flex,Text,Link, } from "@chakra-ui/react"

function Footer() {
  return (
    <Flex bg={'#862633'} p={'.25em'} color={'#fffe'} justifyContent={'center'}>
        <Text fontSize={'sm'}>made by <Link href="https://aswnss.vercel.app" fontWeight={'bold'} >aswnss</Link></Text>
    </Flex>
  )
}

export default Footer

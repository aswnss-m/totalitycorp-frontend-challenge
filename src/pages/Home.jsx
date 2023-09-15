import React, {useState,useEffect} from 'react'
import styles from "./styles/Home.module.css";
import {
    Input,
    Stack,
    VStack,
    Select,
    Heading,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup
} from '@chakra-ui/react'
import ItemCard from './components/Card';
import { products } from '../assets';

function Home() {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    const [price, setPrice] = useState('1')
    const [rating, setRating] = useState(0)
    const handleChange = (event) => {
        setCategory(event.target.value)
    }
    const [cart , setCart] = useState(sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [])
    const handleCart = (id) => {
        const item = cart.find((item) => item.id === id) || false
        console.log(item)
        if(!item){
            setCart([...cart,{id,quantity:1}])
        }
        sessionStorage.setItem('cart', JSON.stringify(cart))
        window.location.reload()
    }
    useEffect(()=>{
        sessionStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    return (
        <div className={
            styles.container
        }>
            <div className={
                styles.sidebar
            }>
                <VStack gap={5}>
                    <Heading size='sm'>Filter</Heading>
                    <FormControl>
                        <FormLabel>Category</FormLabel>
                        <Select onChange={handleChange} value={category}>
                            <option value='All'>All</option>
                            <option value='Shoes'>Shoes</option>
                            <option value='Clothing'>Clothing</option>
                            <option value='Accessories'>Accessories</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <RadioGroup onChange={setPrice} value={price}>
                            <Stack direction='row'>
                                <Radio value='1'>Highest first</Radio>
                                <Radio value='2'>Lowest first</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Ratings</FormLabel>
                        <Select value={rating} onChange={(e)=>{
                            setRating(e.target.value)
                        }}>
                            <option value='0'>All</option>
                            <option value='5'>5+</option>
                            <option value='4'>4+</option>
                            <option value='3'>3+</option>
                            <option value='2'>2+</option>
                            <option value='1'>1+</option>
                        </Select>
                    </FormControl>
                </VStack>
            </div>
            <div className={
                styles.search
            }>
                <Input variant='filled' placeholder='Search'
                    onChange={
                        (e) => {
                            setSearch(e.target.value)
                        }
                    }/>
            </div>
        <div className={
            styles.main
        }>
            {products.filter((item) => {
                if (category === 'All') {
                    return item
                } else if (item.category === category) {
                    return item
                }
            }).filter((item) => {
                if (search === '') {
                    return item
                } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                    return item
                }
            }).filter((item)=>{
                if(rating === 0){
                    return item
                }else if(item.rating >= rating){
                    return item
                }
            }).sort((a, b) => {
                if (price === '1') {
                    return b.price - a.price
                } else {
                    return a.price - b.price
                }
            }).map((item) => {
                return <ItemCard key={item.id} props={item} handleAddCart={handleCart}/>
            })
            }
            
        </div>
    </div>
    )
}

export default Home

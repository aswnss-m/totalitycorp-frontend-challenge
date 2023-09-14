import React, {useState} from 'react'
import styles from "./Home.module.css";
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

function Home() {
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('1')
    
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
                        <Select placeholder='Select option'>
                            <option value='option1'>All</option>
                            <option value='option1'>Gadgets</option>
                            <option value='option2'>Phones</option>
                            <option value='option3'>Fashion</option>
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
                        <Select>
                            <option value='option1'>All</option>
                            <option value='option1'>5+</option>
                            <option value='option1'>4+</option>
                            <option value='option2'>3+</option>
                            <option value='option3'>2+</option>
                            <option value='option3'>1+</option>
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
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    </div>
    )
}

export default Home

import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import axios from 'axios'
import Product from '../Product'

const Home = () => {
    const [productObj, setProductObj]= useState([])

    useEffect(()=>{
        async function allProduct (){
            let data = await axios.get('https://tituvai.github.io/bdApiProducts/products/index.json')
            setProductObj(data.data.data)
        }
        allProduct()
    })
  return (
    <>
        <div className="py-30">
            <Container>
                <Flex className={'flex-wrap gap-y-8'}>
                    {productObj.map((item, index)=>(
                        <div className="w-[24%]" key={index}>
                            <Product productSrc={item.image} productTitle={item.title} productBarge={item.badge} productPrice={item.price}/>
                        </div>
                    ))}
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Home
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
       <div className="py-5">
        <Container>
            <Flex>
                <div className="">
                    <h2 className='text-3xl text-teal-500 font-bold'>API</h2>
                </div>
                <div className="flex items-center gap-x-10">
                    {
                        [{name: "Home", path:'/' }, {name:"About", path:'/About'}, {name:"Service", path:'/Service'}, {name:"Contact", path:'/Contact'}].map((item, index)=>(
                            <Link to={item.path} key={index}>{item.name}</Link>
                        ))
                    }
                </div>
            </Flex>
        </Container>
        </div> 
    </>
  )
}

export default Header
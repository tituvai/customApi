import React from 'react'
import Image from '/src/components/Image'


const Product = ({productSrc, productBarge, productTitle, productPrice}) => {
  return (
    <>
    <div className=" group">
            <div className="relative bg-stone-100">
                <Image className={'w-full h-[300px]'} imgSrc={productSrc}/>
                <h3 className='w-[80px] py-2 text-center absolute left-5 top-5 bg-black text-white text-base font-medium rounded'>{productBarge}</h3>
                <div className="w-[200px] bg-white py-3 text-center absolute left-10 bottom-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className='text-base text-black font-medium'>Add to Card</button>
                </div>
            </div>
            <div className="flex items-center justify-between pt-3">
                <h3 className='text-base text-black '>{productTitle}</h3>
                <p className='text-base text-stone-500 font-medium'>{productPrice}</p>
            </div>
    </div>
    </>
  )
}

export default Product
import React, { useState } from 'react'
import Product from './ProductCard'

const ProductsContainer = ({
    products,
}: {
    products: {
        image: string
        name: string
        price: number
    }[]
}) => {
    const [prdouctsNumber, setprdouctsNumber] = useState(10)

    const loadMore = () => {
        setprdouctsNumber(prdouctsNumber + 10)
    }

    return (
        <>
            <div className=" flex-wrap flex justify-between md:justify-start mt-5">
                {products.slice(0, prdouctsNumber).map((product, index) => (
                    <Product
                        img={product.image}
                        name={product.name}
                        price={product.price}
                        key={index}
                    />
                ))}
            </div>
            {products.length > prdouctsNumber && (
                <div className="w-full items-center justify-center flex">
                    <button
                        onClick={loadMore}
                        className="w-fit mx-auto text-center  text-white bg-black  px-10 py-1"
                    >
                        تحميل المزيد من المنتجات
                    </button>
                </div>
            )}
        </>
    )
}

export default ProductsContainer

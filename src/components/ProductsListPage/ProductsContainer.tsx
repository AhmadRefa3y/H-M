import React from 'react'
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
    return (
        <div className=" flex-wrap flex justify-between md:justify-start mt-5">
            {products.map((product, index) => (
                <Product
                    img={product.image}
                    name={product.name}
                    price={product.price}
                    key={index}
                />
            ))}
        </div>
    )
}

export default ProductsContainer

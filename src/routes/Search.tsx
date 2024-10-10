import { useParams, useSearchParams } from 'react-router-dom'
import ProductsList from './ProductsList'
import ProductsWithFilters from '../components/ProductsListPage/ProductsWithFilters'
import { useEffect, useState } from 'react'
import React from 'react'

const Input = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') // جلب قيمة البحث من البارام
    const params = useParams()

    const [products, setProducts] = useState<
        | {
              id: string
              name: string
              image: string
              price: number
              category: string
              colors: string[]
              sizes: string[]
          }[]
        | []
    >([])

    const [Loading, setLoading] = useState(true)

    const getProducts = async () => {
        const response = await fetch(
            'https://h-m-server.vercel.app/api/products'
        )
        const data = await response.json()
        const FetchProducts = data['data']
        const products = FetchProducts.map((product: any) => {
            return {
                id: product.id,
                name: product.title,
                image: product['images'][1],
                price: product.price,
                category: product.category,
                colors: product['colors'].map((color: any) => color.label),
                sizes: product['Sizes'].map((size: any) => size.label),
            }
        })
        const removedDuplicates = products.filter(
            (value, index, self) =>
                index === self.findIndex((t) => t.image === value.image)
        )
        setProducts(removedDuplicates)
        setLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            {/* <ProductsList name={query} /> */}
            <ProductsWithFilters
                products={products}
                name={query || ''}
                loading={Loading}
            />
        </div>
    )
}

export default Input

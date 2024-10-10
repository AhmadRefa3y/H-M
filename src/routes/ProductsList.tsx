import React, { useEffect, useState } from 'react'
import SideBar from '../components/ProductsListPage/SideBar'
import ProductsWithFilters from '../components/ProductsListPage/ProductsWithFilters'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductsNaviagtion from '../components/ProductsListPage/productsNaviagtion'

const ProductsList = () => {
    const params = useParams()
    console.log(params.shop)

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
        <div className="flex flex-col px-6">
            <ProductsNaviagtion />
            <div className="flex justify-between mt-5">
                <SideBar />
                <main className="flex flex-col flex-1">
                    <h1 className="sm:text-5xl text-3xl text-center sm:text-start mb-8">
                        الأولاد 9-14 سنوات
                    </h1>
                    <ProductsWithFilters
                        products={products}
                        loading={Loading}
                    />
                </main>
            </div>
        </div>
    )
}

export default ProductsList

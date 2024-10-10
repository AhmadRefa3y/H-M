import React, { useEffect, useState } from 'react'
import Filters from './Filters'
import ProductsContainer from './ProductsContainer'
import SelectedFilters from './SelectedFilters'
import { useParams } from 'react-router-dom'

const ProductsWithFilters = ({
    name,
    products,
    loading,
}: {
    name?: string
    products:
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
    loading: boolean
}) => {
    const { shop } = useParams()

    const updateFilter = (filterType, value) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [filterType]: value,
        }))
    }

    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedFilters, setSelectedFilters] = useState({
        price: null,
        color: null,
        size: null,
        category: shop,
        name: name,
    })

    const applyFilters = () => {
        setFilteredProducts(
            products.filter((product) => {
                return (
                    (!selectedFilters.price ||
                        product.price === selectedFilters.price) &&
                    (!selectedFilters.color ||
                        product.colors.some(
                            (size) => size === selectedFilters.color
                        )) &&
                    (!selectedFilters.size ||
                        product.sizes.some(
                            (size) => size === selectedFilters.size
                        )) &&
                    (!selectedFilters.category ||
                        product.category === selectedFilters.category) &&
                    (!selectedFilters.name ||
                        product.name.includes(selectedFilters.name))
                )
            })
        )
    }

    const selectedFiltersArray = Object.entries(selectedFilters)
        .filter(([name, value]) => {
            if (name === 'category' && value === shop) return false
            if (name === 'name') return false
            return value
        })
        .map(([Filter, value]) => ({ Filter, value }))

    useEffect(() => {
        setSelectedFilters((prev) => ({
            ...prev,
            name: name,
        }))
    }, [name])

    useEffect(() => {
        applyFilters()
    }, [selectedFilters])

    useEffect(() => {
        applyFilters()
    }, [products])

    useEffect(() => {
        setSelectedFilters((prev) => ({
            ...prev,
            category: shop,
        }))
    }, [shop])
    return (
        <>
            <Filters products={filteredProducts} updateFilter={updateFilter} />
            {selectedFiltersArray.length > 0 && (
                <SelectedFilters
                    selectedFiltersArray={selectedFiltersArray}
                    updateFilter={updateFilter}
                />
            )}

            {loading ? (
                <ProductsSkeleton />
            ) : (
                <ProductsContainer products={filteredProducts} />
            )}
        </>
    )
}

export default ProductsWithFilters

const ProductsSkeleton = () => {
    return (
        <div className=" flex-wrap flex justify-between md:justify-start mt-5">
            {[...Array(10)].map((_, index) => (
                <div className="px-2 w-[280px] h-[450px] mb-[55px]">
                    <div
                        key={index}
                        className=" w-full h-full bg-gray-200 animate-pulse"
                    />
                </div>
            ))}
        </div>
    )
}

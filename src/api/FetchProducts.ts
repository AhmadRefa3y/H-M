import axios from 'axios'

type Filters = {
    name?: string
    price?: string
    color?: string
    size?: string
    category?: string
    count?: number
}
export const getProducts = async (filters?: Filters) => {
    const response = await axios('https://h-m-server.vercel.app/api/products', {
        // const response = await axios('http://localhost:8080/api/products', {
        params: {
            ...filters,
        },
    })
    const data = await response.data.data
    const FetchProducts = data
    const products: {
        id: string
        name: string
        image: string
        price: number
        category: string
        color: string
        size: string
    }[] = FetchProducts.map((product: any) => {
        return {
            id: product.id,
            name: product.title,
            image: product['images'][1],
            price: product.price,
            category: product.category,
            color: product.color,
            size: product.size,
        }
    })

    return products
}

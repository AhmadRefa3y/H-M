import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({
    name,
    image,
    price,
    id,
}: {
    name: string
    image: string
    price: number
    id: string
}) => {
    return (
        <div className="min-w-[245px] h-[411px] px-2">
            <div className="flex flex-col h-full">
                <Link to={`/product/${id}`} className="w-full">
                    <img src={image} alt="" />
                </Link>

                <div className="flex flex-col text-sm mt-auto">
                    <p>{name}</p>
                    <p>{`${price.toFixed(2)} ج.م`}</p>
                </div>
            </div>
        </div>
    )
}

export default Card

import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Carousel from '../Carousel'
import TrendingFilters from './TrendingFilters'

const TrendingNow = () => {
    const [filter, setFilter] = useState({
        name: 'kids',
        label: 'الاطفال',
    })

    return (
        <div className="flex flex-col items-center justify-center my-5 gap-5 relative">
            <p className="text-3xl">الرائج الان</p>
            <TrendingFilters filter={filter} setFilter={setFilter} />
            <Carousel category={filter.name} />
        </div>
    )
}

export default TrendingNow

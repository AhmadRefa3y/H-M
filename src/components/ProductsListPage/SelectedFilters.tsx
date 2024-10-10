import React from 'react'
import { MdClose } from 'react-icons/md'
import { useParams } from 'react-router-dom'

const SelectedFilters = ({
    selectedFiltersArray,
    updateFilter,
}: {
    selectedFiltersArray: any
    updateFilter: any
}) => {
    return (
        <div className="flex gap-2 items-center flex-col sm:flex-row border sm:border-none p-2 lg:h-[50px]">
            <div className=" font-bold whitespace-nowrap text-center sm:text-start py-3">
                الاختيارات المحددة
            </div>
            <div className="flex gap-3 flex-wrap justify-center  ">
                {selectedFiltersArray.map((filter, index) => {
                    if (filter.Filter === 'name') return null
                    return (
                        <button
                            key={index}
                            onClick={() => updateFilter(filter.Filter, null)}
                            className="flex gap-2 border px-2 py-1 items-center justify-center"
                        >
                            <span className="flex items-center justify-center text-sm">
                                {filter.value === 'kids'
                                    ? 'اطفال'
                                    : filter.value === 'men'
                                    ? 'رجال'
                                    : filter.value === 'women'
                                    ? 'نساء'
                                    : filter.value}
                            </span>
                            <MdClose className="size-[18px] sm:size-[24px]" />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default SelectedFilters

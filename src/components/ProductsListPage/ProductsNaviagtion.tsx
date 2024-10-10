import React from 'react'
import { Link } from 'react-router-dom'

const ProductsNaviagtion = () => {
    return (
        <div className="text-center text-sm flex justify-center my-3">
            <Link to="/" className="px-1">
                الصفحة الرئيسية
            </Link>{' '}
            /
            <Link to="/kids" className="px-1">
                الاطفال
            </Link>{' '}
            /
            <Link to="/kids/view-all" className="px-1">
                عرض الكل
            </Link>
        </div>
    )
}

export default ProductsNaviagtion

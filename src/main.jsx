import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import RootLayout from './routes/RootLayout'
import './index.css'
import About from './routes/About'
import HomePage from './routes/HomePage'
import Login from './routes/Login'
import Register from './routes/Register'
import Product from './routes/Product'
import ProductsList from './routes/ProductsList'
import WomenShop from './routes/WomenShop'
import Input from './routes/Search'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'product',
                element: <Product />,
            },
            {
                path: ':shop/view-all',
                element: <ProductsList />,
            },
            {
                path: ':shop',
                element: <WomenShop />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
            {
                path: 'search/',
                element: <Input />,
            },
        ],
    },
])
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)

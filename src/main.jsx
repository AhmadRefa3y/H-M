// import { StrictMode } from 'react'
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
import SearchPage from './routes/Search'
import ProfilePage from './routes/ProfilePage'
import ProductsPage from './routes/ProductsPage' // استيراد الصفحة الجديدة
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Cart from './routes/Cart'
import WishList from './routes/WishList'
import AuthProvider from './providers/AuthProvider'

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
                path: 'product/:id',
                element: <Product />,
            },
            {
                path: ':shop/view-all',
                element: <ProductsList />,
            },
            {
                path: 'women',
                element: <WomenShop />,
            },

            {
                path: 'products',
                element: <ProductsPage />,
            },

            {
                path: '*',
                element: <ErrorPage />,
            },
            {
                path: 'search/',
                element: <SearchPage />,
            },
            {
                path: 'profilePage',
                element: <ProfilePage />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'wishlist',
                element: <WishList />,
            },
        ],
    },
])
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </AuthProvider>
    // </StrictMode>
)

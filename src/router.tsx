import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader, action as updateAvailabilityAction } from './view/Products'
import NewProduct, { action as newProductAction} from './view/NewProduct'
import EditProduct, { loader as editProductLoader, action as editProductAction } from './view/EditProduct'
import Loading from './components/Loading'
import { action as deleteProductAction } from './components/ProductDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        hydrateFallbackElement: <Loading/>,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {   
                path: 'products/new',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'products/:id/edit', // ROA Pattern - Resource-oriented desing
                element: <EditProduct/>,
                loader: editProductLoader,
                action: editProductAction,
            },
            {
                path: 'products/:id/delete',
                action: deleteProductAction
            }
        ]
    }
])
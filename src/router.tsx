import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './view/Products'
import NewProduct, { action as newProductAction} from './view/NewProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {   
                path: 'products/new',
                element: <NewProduct/>,
                action: newProductAction
            }
        ]
    }
])
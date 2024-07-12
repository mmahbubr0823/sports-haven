import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../component/layout/mainLayout/MainLayout';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import HomePage from '../../pages/HomePage/HomePage';
import AboutUs from '../../pages/AboutUs/AboutUs';
import AllProducts from '../../pages/AllProducts/AllProducts';
import ManageProducts from '../../pages/ManageProducts/ManageProducts';
import SingleProduct from '../../pages/SingleProduct/SingleProduct';
import Cart from '../../pages/Cart/Cart';

const AllRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:([
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/about-us',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/all-products',
                element:<AllProducts></AllProducts>
            },
            {
                path:'/single-product/:id',
                element:<SingleProduct></SingleProduct>
            },
            {
                path:'/manage-products',
                element:<ManageProducts></ManageProducts>
            },
            {
                path:'/my-cart',
                element:<Cart></Cart>
            },
        ])
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default AllRoutes;
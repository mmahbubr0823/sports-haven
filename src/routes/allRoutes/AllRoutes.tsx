import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../component/layout/mainLayout/MainLayout';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

const AllRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default AllRoutes;
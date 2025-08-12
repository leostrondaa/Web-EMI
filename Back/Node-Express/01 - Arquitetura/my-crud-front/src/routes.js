// React Router
import { createBrowserRouter, Navigate} from "react-router-dom"
import Home from './pages/home'
import Create from './pages/users/create'
import Edit from './pages/users/edit'

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Navigate to="/user" replace />
    },
    {
        path: "/user", 
        element: <Home />,
    },
    {
        path: "/user/create", 
        element: <Create />,
    },
    {
        path: "/user/edit", 
        element: <Edit />,
    },
])

export default router
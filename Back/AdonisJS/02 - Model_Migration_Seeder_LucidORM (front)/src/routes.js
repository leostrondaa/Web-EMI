// React Router
import { createBrowserRouter, Navigate} from "react-router-dom"
import Login from './pages/login'
import Home from './pages/home'
import Cursos from './pages/cursos'
import CursosCreate from './pages/cursos/create'
import CursosEdit from './pages/cursos/edit'


const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Navigate to="/login" replace />
    },
    {
        path: "/login", 
        element: <Login />,
    },
    { 
        path: "/home", 
        element: <Home />,
    },
    {
        path: "/cursos", 
        element: <Cursos />,
    },
    {
        path: "/cursos/create", 
        element: <CursosCreate />,
    },
    {
        path: "/cursos/edit", 
        element: <CursosEdit />,
    },
])

export default router
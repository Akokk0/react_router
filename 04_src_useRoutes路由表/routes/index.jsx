import { Navigate } from "react-router-dom";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        /*children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>
            }
        ]*/
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
]

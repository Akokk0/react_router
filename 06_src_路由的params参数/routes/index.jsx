import { Navigate } from "react-router-dom";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import News from "../pages/News.jsx";
import Message from "../pages/Message.jsx";
import Detail from "../pages/Detail.jsx";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>,
                children: [
                    {
                        path: 'detail/:id/:title/:content',
                        element: <Detail/>,
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about'/>
    }
]

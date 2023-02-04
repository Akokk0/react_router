import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
// 直接引入路由表方便管理路由
import routes from "./routes"

export default function App() {

    // 路由表
    /*const element = useRoutes([
        { path: '/about', element: <About/> },
        { path: '/home', element: <Home/> },
        { path: '/', element: <Navigate to='/about'/> }
    ])*/

    const element = useRoutes(routes)

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 路由链接 */}
                        {/* 更改默认active样式的两种写法 */}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        {/* 子集路由如果匹配则会让自己的高亮消失 */}
                        <NavLink className="list-group-item" end to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

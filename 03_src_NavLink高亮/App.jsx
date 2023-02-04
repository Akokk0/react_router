import React from "react";
import {NavLink, Routes, Route, Navigate} from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

export default function App() {

    function computedActiveClassName({isActive}) {
        return isActive ? 'list-group-item akokko' : 'list-group-item'
    }

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
                        <NavLink className={({isActive}) => isActive ? 'list-group-item akokko' : 'list-group-item'} to="/about">About</NavLink>
                        <NavLink className={computedActiveClassName} to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            <Routes>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/home" element={<Home/>}/>
                                {/* 路由重定向 */}
                                <Route path="/" element={<Navigate to="/about"/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

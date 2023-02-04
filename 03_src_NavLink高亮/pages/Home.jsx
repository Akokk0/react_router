import React, {useState} from "react";
import {Navigate} from "react-router-dom";

export default function Home() {
    const [count, setCount] = useState(1)

    return (
        <div>
            {
                count === 2 ? <Navigate to="/about"/> : <h2>我是Home组件，当前count值为：{count}</h2>
            }
            <button onClick={() => setCount(2)}>点我将count值改为2</button>
        </div>
    )
}

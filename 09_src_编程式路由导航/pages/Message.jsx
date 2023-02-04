import React, {useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";

export default function Message() {

    const navigate = useNavigate()

    const [messages] = useState([
        { id: '001', title: '消息1', content: '锄禾日当午' },
        { id: '002', title: '消息2', content: '汗滴禾下土' },
        { id: '003', title: '消息3', content: '谁知盘中餐' },
        { id: '004', title: '消息4', content: '粒粒皆辛苦' }
    ])

    function showDetail(m) {
        navigate('detail', {
            replace: true,
            state: {
                id: m.id,
                title: m.title,
                content: m.content
            }
        })
    }

    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {
                    messages.map((mObj) => {
                        return (
                            <li key={mObj.id}>
                                <Link
                                    to="detail"
                                    state={{
                                        id: mObj.id,
                                        title: mObj.title,
                                        content: mObj.content
                                    }}>{mObj.title}</Link>
                                <button onClick={() => showDetail(mObj)}>点击查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    )
}

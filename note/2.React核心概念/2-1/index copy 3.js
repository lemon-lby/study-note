import React from 'react';
import {
    createRoot
} from 'react-dom/client';
import "./index.css"


const url = "https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
const cls = 'image'
const div = (
    <div>
        <img src={url} className={cls} style={{
            marginLeft:"50px",
            width:"100%"
        }} alt="" />
    </div>
)

createRoot(document.getElementById("root")).render(div);
import React from "react";
import { createRoot } from "react-dom/client";
import MyCopm from "./MyCopm";
import Control from "./Control";
// function handClick() {
//     console.log("点击了")
// }

// const btn = <button onClick={handClick}>点击</button>
const btn = <button
    onClick={() => {
        console.log("点击了")
    }}
    onMouseEnter={() => {
        console.log("进入了")
    }}
>点击
</button>

const root = createRoot(document.getElementById("root"));
root.render(<Control />);
import React from "react";
import {
    createRoot
} from "react-dom/client";
import MyFuncComp from "./MyFuncComp";
import MyClassComp from "./MyClassComp";


createRoot(document.getElementById("root")).render(
    <div>
        <MyFuncComp number="2" />

        <MyClassComp number="2" ennable obj={{
            name:"dsd"
        }} ui={<h2>这</h2>} />

    </div>
); 
import React from 'react';
import {
    createRoot
} from 'react-dom/client';
let num = 1;

// 要改动 需要每次进行重新渲染
setInterval(() => {
    num++;
    const div = (
        <div>
            {num}
        </div>
    );
    createRoot(document.getElementById("root")).render(div);
}, 1000);

import React from 'react';
import {
    createRoot
} from 'react-dom/client';

const content = "<h1>asdas<p>阿松大</p></h1>"
const div = (
    <div dangerouslySetInnerHTML={{
        __html: content
    }}>
        
    </div>
)

createRoot(document.getElementById("root")).render(div);
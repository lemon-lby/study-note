import React from 'react';
import ReactDom from 'react-dom';
import {
    createRoot
} from 'react-dom/client';

const a = 1234,
    b = 4321
const obj1 = {
    a: 1,
    b: 2
}
const obj2 = <span> 这是一个元素对象 </span>
const numbers = new Array(30);
numbers.fill(0);
var lis = numbers.map((item, i) => (<li key={i}>{i}</li>))


const div = (
    <h1>
        {a}*{b} = {a * b}
        {
            /* 以下不会输出 */
        }
        <p >
            {null}
            {undefined}
        </p>


        {/* 普通对象无法输出 */}
        {/* <p>{obj1}</p> */}


        { /* react元素对象可以输出 */}
        <p>{obj2}</p>

        <p>{lis}</p>
    </ h1>
)

// const div = React.createElement("div",{},`${a}*${b} =${a*b}`)

createRoot(document.getElementById("root")).render(div);
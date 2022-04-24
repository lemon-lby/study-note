import React from 'react';
import ReactDom from 'react-dom';
import {
  createRoot
} from 'react-dom/client';


const h1 = (
  <>
    <h1> hello world <span> span元素 </span></h1>
    <p> sada </p>
  </>
)
console.log(h1);

{/* 相当于 */ }
{/*  React.createElement("h1",{ },"hello world",React.createElement("span",{ },"span元素")) */ }

const img = (<img alt="" src="https://img0.baidu.com/it/u=2862534777,914942650&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(img)
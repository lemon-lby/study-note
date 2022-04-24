import React from "react";
import { createRoot } from "react-dom/client";
import src1 from "./img/1.jpg";
import src2 from "./img/2.jpg";
import src3 from "./img/3.jpg";
import "./index.css"


let index = 0;
const srcs = [src1, src2, src3];
const container = document.getElementById("root")
const root = createRoot(container);
let timer;

function render() {
    const div = (
        <img src={srcs[index]} alt="" />
    )
    root.render(div);
}

function start() {
    stop();
    timer = setInterval(() => {
        index = (index + 1) % 3;
        render();
    }, 2000);
}

function stop() {
    clearInterval(timer);
}

render();

start();

container.onmouseenter = (() => {
    stop();
})
container.onmouseleave = (() => {
    start();
})
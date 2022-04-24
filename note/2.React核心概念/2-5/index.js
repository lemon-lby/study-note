import React from "react";
import {
    createRoot
} from "react-dom/client";
import Tick from "./components/Tick";

const root = createRoot(document.getElementById("root"));
root.render(< Tick number={2} />)
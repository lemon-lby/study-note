import React from "react";
import { createRoot } from "react-dom/client";
import Ball from "./components/Ball";
import BallList from "./components/BallList";


const root = createRoot(document.getElementById("root"));
root.render(<BallList/>)
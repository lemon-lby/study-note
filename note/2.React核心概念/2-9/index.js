import React from "react";
import { createRoot } from "react-dom/client";
import Comp from "./components/Comp";

const root = createRoot(document.getElementById("root"));
root.render(<Comp/>);
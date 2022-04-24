import React from "react";
import {
    createRoot
} from "react-dom/client";
import Student from "./components/Student";
import StudentsList from "./components/StudentsList";

const appkey = "demo13_1545210570249";
async function fetchAllStudents() {
    const stus = await fetch("https://api.duyiedu.com/api/student/findAll?appkey=" + appkey).then(resp => resp.json()).then(resp => resp.data)
    return stus;
}
async function render() {
    const stus = await fetchAllStudents();
    createRoot(document.getElementById("root")).render(<StudentsList stus={stus} />)
}

render();
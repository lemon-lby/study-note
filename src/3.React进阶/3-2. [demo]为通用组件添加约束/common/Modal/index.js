import React from 'react'
import "./index.css"
import PropTypes from "prop-types"
import types from "../../../utils/commonTypes"


Modal.defaultProps = {
    bg: "rgba(0, 0, 0, .5)"
}
Modal.prototypes = {
    children: types.children,
    bg: PropTypes.string,
    onClose: PropTypes.func
}
export default function Modal(props) {
    return (
        <div onClick={e => {
            if (e.target.className === "modal") {
                props.onClose();
            }
        }} className="modal" style={{
            background: props.bg
        }} >
            <div className="modalContext">
                {props.children}
            </div>
        </div>
    )
}

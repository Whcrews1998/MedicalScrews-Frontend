import "./CreateScrew.css"
import axios from "axios";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


export default function CreateScrew({addScrew}) {

    const [width, setWidth] = useState(0);
    const [length, setLength] = useState(0);

    function isDecimal(num) {
        return (num % 1);
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("width: " + width);
        console.log("length: " + length);

        if (width == 0 || length == 0) {
            alert("Measurments may not be zero.");
            return false;
        }

        if (!Number.isInteger(length)) {
            alert("Length cannot be a decimal.");
            return false;
        }

        addScrew(width, length);

        
    }

    return (
        <form className="create-screw-form" onSubmit={handleSubmit}>
            <label className="create-screw-label">
                <input type="text" placeholder="width" onChange={(e) => setWidth(e.target.value)}></input>
                <input type="text" placeholder="length" onChange={(e) => setLength(e.target.value)}></input>
                <button type="submit">Create</button>
            </label>
        </form>
    )
}
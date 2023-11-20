import "./CreateSet.css"
import axios from "axios";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


export default function CreateSet({addSet}) {

    const [name, setName] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        addSet(name);
        setName(""); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="create-set-label">
                <input type="text" className="create-set-input" value={name} placeholder="Set name" onChange={(e) => setName(e.target.value)}></input>
                <button type="submit" className="create-set-button">Create</button>
            </label>
        </form>
    )
}
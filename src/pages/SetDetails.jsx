import axios from "axios";
import "./SetDetails.css"
import {useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import Set from "../components/MedicalSet"
import "./Home.css";


export default function SetDetails({set}) {
    
    const location = useLocation();
    const [medicalSet, setMedicalSet] = useState(location.state);

    return (
        <div className="set-details-page">
            {location.state == null ? (<div></div>) : (<Set set={medicalSet}></Set>) }
        </div>
    );
}
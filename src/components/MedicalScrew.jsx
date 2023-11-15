import "./MedicalScrew.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MedicalScrew({screw, togglePresent, deleteScrew}) {

    return (
        <div className={"screw screw-" + (screw.present ? "present" : "missing")} >
            <div onClick={() => togglePresent(screw.id)}>{screw.name}</div>
            <button className="delete-button" onClick={() => deleteScrew(screw.id)}></button>
        </div>
    )
}
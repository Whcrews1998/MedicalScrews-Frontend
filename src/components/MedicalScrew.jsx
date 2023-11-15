import "./MedicalScrew.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MedicalScrew({screw, togglePresent}) {

    function deleteScrew() {
        axios.delete(`http://localhost:8080/medical-set/delete-screw?screwID=${screw.id}`).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        });
    }



    return (
        <div className={"screw screw-" + (screw.present ? "present" : "missing")} onClick={() => togglePresent(screw.id)}>
            <div>{screw.name}</div>
            <button className="delete-button"></button>
        </div>
    )
}
import "./MedicalScrew.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MedicalScrew({screw}) {
    const [isPresent, setPresent] = useState(screw.present);

    function updatePresent() {
        setPresent(!isPresent);

        axios.post(`http://localhost:8080/medical-set/update-present-state?id=${screw.id}&newState=${isPresent ? false:true}`).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        });

    }

    function DeleteScrew() {
        useEffect(() => {
            axios.delete(`http://localhost:8080/medical-set/delete-screw?screwID=${screw.id}`).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });
        },[]);
    }



    return (
        <div className={"screw screw-" + (isPresent ? "present" : "missing")} onClick={updatePresent}>
            <div>{screw.name}</div>
            <button className="delete-button" onClick={DeleteScrew}></button>
        </div>
    )
}
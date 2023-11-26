import axios from "axios";
import CreateSet from "../components/CreateSet";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import Set from "../components/MedicalSet"
import "./Home.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import details from "../configuration/ServerDetails"

export default function Home() {
    console.log(details);
    const [medicalSets, setMedicalSets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://${details.url}:${details.port}/medical-set/get-all`).then(response => {
            setMedicalSets(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, [setMedicalSets]);

    const route = (setId) => {
        const setData = medicalSets.find((set) => {
            if (setId === set.id)
                return true;
        })
        console.log(setData);
        navigate('/set-details', {state: setData});
    }

    function addSet(name) {
        axios.post(`http://localhost:8081/medical-set/create`, {name: name}).then(response => {
            setMedicalSets([...medicalSets, response.data]);
        }).catch(error => {
            console.error(error);
        });
    }

    function deleteSet(setId) {
        setMedicalSets(medicalSets.filter((set) => {
            if (set.id !== setId)
                return true;

            axios.delete(`http://localhost:8080/medical-set/delete-set?setID=${set.id}`).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });

            return false;
            
        }));
    }

    function editSet() {
        alert("Functionality not implemented yet...");
    }

    return (
    <div className='home-page'>
        <div className="set-list-wrapper">
            {medicalSets.map((set, index) => (
                <div className="set">
                    <div key={index} onClick={() => route(set.id)}>{set.name}</div>
                    <div className="set-icons">
                        <FontAwesomeIcon className="set-edit-icon" icon={faPenToSquare} onClick={() => editSet()}/>
                        <FontAwesomeIcon className="set-delete-icon" icon={faTrash} onClick={() => deleteSet(set.id)}/>
                    </div>
                </div>
            ))}
            <CreateSet addSet={addSet}/>
        </div>
    </div>
    );
}
import axios from "axios";
import CreateSet from "../components/CreateSet";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import Set from "../components/MedicalSet"
import "./Home.css"

export default function Home() {
    const [medicalSets, setMedicalSets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/medical-set/get-all').then(response => {
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
        axios.post('http://localhost:8080/medical-set/create', {name: name}).then(response => {
            setMedicalSets([...medicalSets, response.data]);
        }).catch(error => {
            console.error(error);
        });
    }

    return (
    <div className='App'>        
        {medicalSets.map((set, index) => (
        <div className="set-name" key={index} onClick={() => route(set.id)}>{set.name}</div>
        ))}
        <CreateSet addSet={addSet}/>
    </div>
    );
}
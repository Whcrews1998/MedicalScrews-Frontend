import axios from "axios";
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

    return (
    <div className='App'>        
        {medicalSets.map(set => (
        <div className="set-name" onClick={() => route(set.id)}>{set.name}</div>
        ))}
    </div>
    );
}
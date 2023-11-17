import { useState, useEffect } from "react";
import axios from "axios";
import "./MedicalSet.css"
import Screw from "./MedicalScrew"
import CreateScrew from "./CreateScrew";

export default function MedicalSet({set}) {

    const [screwList, setScrewList] = useState([]);

    useEffect(() => {
        console.log(set);
        axios.get(`http://localhost:8080/medical-set?setID=${set.id}`).then(response => {
            console.log(response.data);
            setScrewList(response.data.screwList);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function togglePresent(id){
        setScrewList(screwList.map((screw) => {
            
            if (screw.id === id) {
                axios.post(`http://localhost:8080/medical-set/update-present-state?id=${screw.id}&newState=${screw.present ? false:true}`).then(response => {
                    console.log(response.data);
                }).catch(error => {
                    console.error(error);
                });

                return {...screw, present: !screw.present};
            } 
                return {...screw};
        }));
    }

    function deleteScrew(id) {
        setScrewList(screwList.filter((screw) => {
            if (screw.id !== id)
                return true;

            axios.delete(`http://localhost:8080/medical-set/delete-screw?screwID=${screw.id}`).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });

            return false;
            
        }));
    }

    function addScrew(width, length) {

        axios.post(`http://localhost:8080/medical-set/add-screw?setID=${set.id}`, {width: width, length: length, present: true}).then(response => {
            console.log(response.data);
            setScrewList(response.data.screwList);
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div> 
            <div className="set-name"> {set.name} </div>
            {screwList.map((screw, index) => (
                <Screw screw={screw} key={index} togglePresent={togglePresent} deleteScrew={deleteScrew}/>
            ))}
            <CreateScrew addScrew={addScrew}/>
        </div>
    )
}
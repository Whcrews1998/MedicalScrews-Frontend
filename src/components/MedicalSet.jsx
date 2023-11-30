import { useState, useEffect } from "react";
import axios from "axios";
import "./MedicalSet.css"
import Screw from "./MedicalScrew"
import CreateScrew from "./CreateScrew";
import details from "../configuration/ServerDetails";

export default function MedicalSet({set}) {

    const [screwList, setScrewList] = useState([]);

    useEffect(() => {
        console.log(set);
        axios.get(`${details.url}/medical-set?setID=${set.id}`).then(response => {
            console.log(response.data);
            setScrewList(response.data.screwList);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function togglePresent(id){
        setScrewList(screwList.map((screw) => {
            
            if (screw.id === id) {
                axios.post(`${details.url}/medical-set/update-present-state?id=${screw.id}&newState=${screw.present ? false:true}`).then(response => {
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

            axios.delete(`${details.url}/medical-set/delete-screw?screwID=${screw.id}`).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.error(error);
            });

            return false;
            
        }));
    }

    function addScrew(width, length) {

        axios.post(`${details.url}/medical-set/add-screw?setID=${set.id}`, {width: width, length: length, present: true}).then(response => {
            console.log(response.data);
            setScrewList(response.data.screwList);
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div className="screw-list"> 
            <div className="name"> {set.name} </div>
            {screwList.map((screw, index) => (
                <Screw screw={screw} key={index} togglePresent={togglePresent} deleteScrew={deleteScrew}/>
            ))}
            <CreateScrew addScrew={addScrew}/>
        </div>
    )
}
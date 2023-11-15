import { useState } from "react";
import axios from "axios";
import "./MedicalSet.css"
import Screw from "./MedicalScrew"

export default function MedicalSet({set}) {

    const [screwList, setScrewList] = useState(set.screwList);

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

    

    return (
        <div> 
            <div className="set-name"> Set {set.id} </div>
            {screwList.map((screw, index) => (
                <Screw screw={screw} key={index} togglePresent={togglePresent}/>
            ))}
        </div>
    )
}
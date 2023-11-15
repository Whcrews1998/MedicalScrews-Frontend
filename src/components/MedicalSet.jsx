import "./MedicalSet.css"
import Screw from "./MedicalScrew"

export default function MedicalSet({set}) {

    

    return (
        <div> 
            <div className="set-name"> Set {set.id} </div>
            {set.screwList.map(screw => (
                <Screw screw={screw} onClick={(screw) => screw.present = screw.present? false : true}/>
            ))}
        </div>
    )
}
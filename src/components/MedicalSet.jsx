import './MedicalSet.css'
import Screw from "./MedicalScrew"

export default function MedicalSet({set}) {
    return (
        <div>
            <ul>
                Set {set.id}
                {set.screwList.map(screw => (
                    <Screw screw={screw}/>
                ))}
            </ul>
        </div>
    )
}
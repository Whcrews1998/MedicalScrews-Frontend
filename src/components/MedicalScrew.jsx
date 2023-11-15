import "./MedicalScrew.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


export default function MedicalScrew({screw, togglePresent, deleteScrew}) {

    return (
        <div className={"screw screw-" + (screw.present ? "present" : "missing")} >
            <div onClick={() => togglePresent(screw.id)}>{screw.name}</div>
            <FontAwesomeIcon icon={faTrash} className="delete-button" onClick={() => deleteScrew(screw.id)}/>
        </div>
    )
}
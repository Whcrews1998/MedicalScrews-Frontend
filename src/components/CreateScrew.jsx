import "./CreateScrew.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


export default function CreateScrew({handle}) {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" placeholder="width"></input>
                <input type="text" placeholder="length"></input>
                <button type="submit">Create</button>
            </label>
        </form>
    )
}
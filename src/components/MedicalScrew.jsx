import "./MedicalScrew.css"

export default function MedicalScrew({screw}) {
    return (
        <div className="screw">
            {screw.name}
        </div>
    )
}
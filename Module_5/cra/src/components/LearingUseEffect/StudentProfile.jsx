import React from "react";
import { Link } from "react-router-dom";

function StudentProfile(props) {
    const {student} = props
    return (
        <div className="card col-sm-3">
            <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Age: {student.age}</p>
                <p className="card-text">Gender: {student.gender}</p>
                <p className="card-text">Mark: {student.mark}</p>
                <p className="card-text">City: {student.city}</p>
                <Link to={`/student-detail/${student.id}`} className="btn btn-primary">Detail</Link>
            </div>
        </div>
    )
}

export default StudentProfile;
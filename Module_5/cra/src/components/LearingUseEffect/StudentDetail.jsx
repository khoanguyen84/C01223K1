import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentDetail() {
    const [student, setStudent] = useState({})
    const { stdid } = useParams();
    useEffect(() => {
        // fetch(`https://js-post-api.herokuapp.com/api/students/${stdid}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setStudent(data)
        //     })
        fetch(`https://js-post-api.herokuapp.com/api/students/${stdid}`)
            .then(async function (res) {
                let data = await res.json();
                setStudent(data)
            })
    }, [stdid])

    return (
        <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Age: {student.age}</p>
                <p className="card-text">Gender: {student.gender}</p>
                <p className="card-text">Mark: {student.mark}</p>
                <p className="card-text">City: {student.city}</p>
                <Link to={`/learning-use-effect`} className="btn btn-primary">Back</Link>
            </div>
        </div>
    )
}

export default StudentDetail;
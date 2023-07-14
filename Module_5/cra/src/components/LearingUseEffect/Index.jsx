import React, { useState } from "react";
import StudentList from "./StudentList";

function Index() {
    const [showStudentList, setShowStudentList] = useState(false)
    return (
        <>
            <button className="btn btn-danger btn-sm"
                onClick={() => setShowStudentList(!showStudentList)}
            >Show Student List</button>
            { showStudentList && <StudentList/> }
        </>
    )
}

export default Index;
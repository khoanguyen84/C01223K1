import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";
import StudentProfile from "./StudentProfile";

// cú pháp
// useEffect(callback, [deps])
// ý nghĩa: kiểm soát vòng đời của component, tại các thời điểm mounted, updating và unmounted
// có 3 trường hợp sử dụng:
// TH1: useEffect(callback)
// TH2: useEffect(callback, [])
//  -> callback chỉ được thực thi 1 lần duy nhất khi component được mounted DOM
// TH3: useEffect(callback, [deps])
//  -> callback sẽ được thực khi khi [deps] thay đổi

// cơ chế:
// 1. khi componet được mounted vào DOM thì callback sẽ được thực thi
// 2. Ưu tiên render UI trước rồi mới thực thi callback
var totalPages = 0;

function StudentList() {
    const [studentList, setStudentList] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    useEffect(() => {
        setLoading(true)
        fetch(`https://js-post-api.herokuapp.com/api/students?_page=${page}`)
            .then((res) => res.json())
            .then((resData) => {
                setStudentList(resData.data)
                totalPages = Math.ceil(Number(resData.pagination._totalRows) / Number(resData.pagination._limit))
                setLoading(false)
            })


        // cleanup function
        return () => {
            console.log('unmounted');
        }
    }, [page])

    const handlePreviousClick = (e) => {
        e.preventDefault()
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const handleNextClick = (e) => {
        e.preventDefault()
        if (page < totalPages) {
            setPage(page + 1)
        }
    }

    const handleFirstClick = (e) => {
        e.preventDefault()
        setPage(1)
    }
    const handleLastClick = (e) => {
        e.preventDefault()
        setPage(totalPages)

    }
    console.log(page);
    return (
        <>
            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={page > 1 ? "page-item" : "page-item disabled"}>
                            <a className="page-link" href="#" onClick={handleFirstClick}>
                                First
                            </a>
                        </li>
                        <li className={page > 1 ? "page-item" : "page-item disabled"}>
                            <a className="page-link" href="#" onClick={handlePreviousClick}>
                                Previous
                            </a>
                        </li>
                        <li className={page < totalPages ? "page-item" : "page-item disabled"}>
                            <a className="page-link" href="#" onClick={handleNextClick}>
                                Next
                            </a>
                        </li>
                        <li className={page < totalPages ? "page-item" : "page-item disabled"}>
                            <a className="page-link" href="#" onClick={handleLastClick}>
                                Last
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div>
                <h1>Student List</h1>
                {
                    loading ? <Spinner /> : (
                        <div className="row">
                            {
                                studentList.map((student) => (
                                    <StudentProfile key={student.id} student={student} />
                                ))
                            }
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default StudentList;
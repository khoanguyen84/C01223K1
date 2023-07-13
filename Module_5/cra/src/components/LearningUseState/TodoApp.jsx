import React, { useState } from "react";

function TodoApp() {
    const [jobList, setJobList] = useState(["Java", "PHP-Laravel", 'ASP NET Core'])

    const [jobname, setJobname] = useState()

    const handleAddJob = (e) => {
        e.preventDefault();
        setJobList([
            ...jobList,
            jobname
        ])
        setJobname('')
    }

    const handleRemoveJob = (job) => {
        let confirm = window.confirm(`Are you sure to remove job ${job}?`)
        if(confirm){
            let newJobList = jobList.filter(item => item != job);
            setJobList(newJobList)
        }
    }
    return (
        <>
            <h5 className="text-warning">
                <i className="fa-solid fa-list-check"></i> Job List
            </h5>
            <div className="row col-sm-6">
                <div className="form-group">
                    <label>Task Name</label>
                    <form onSubmit={handleAddJob} className="d-flex">
                        <input type="text" className="form-control form-control-sm me-2" 
                            onInput={(e) => setJobname(e.target.value)}
                            value={jobname}
                            required
                        />
                        <button className="btn btn-outline-warning btn-sm">
                            <i className="fa-solid fa-plus">&nbsp;Add</i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="row col-sm-6 mt-3">
                <div className="form-group">
                    <ul className="list-group">
                        {
                            jobList.map((job, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between">
                                    {job}
                                    <i role="button" className="fa fa-times text-danger"
                                        onClick={() => handleRemoveJob(job)}
                                    ></i>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}

export default TodoApp;
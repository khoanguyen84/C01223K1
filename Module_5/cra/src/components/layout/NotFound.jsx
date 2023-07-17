import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-primary">
            <h1 className="display-1 fw-bold text-white">404</h1>
            <Link className="btn btn-link btn-sm text-white" to={'/'}>Go to Home Page</Link>
        </div>
    )
}

export default NotFound;
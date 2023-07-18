import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-warning">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        Logo
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink className='nav-link'
                                    to={"/main"}>
                                    Main
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/learning-use-state'}>
                                    Learning useState
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={'/learning-use-effect'}
                                >
                                    Learning useEffect
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
import React from 'react'
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <div className="m-3 bg-dark">

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/" >BookStore</a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon " ></span>
                    </button>          
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="nav-item nav-link active text-white" to="/book">
                                Book
                            </Link>

                            <Link className="nav-item nav-link active text-white" to="/addbook">
                                Add Book
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white" type="submit">Search</button>
                            <Link to="/login">
                            <button className="btn btn-outline-success text-white " type="submit" style={{marginLeft:"10px"}}>Login   </button>
                            </Link>
                            <Link to="/signup">
                            <button className="btn btn-outline-success text-white " type="submit" style={{marginLeft:"10px"}}>SignUp  </button>
                            </Link>

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
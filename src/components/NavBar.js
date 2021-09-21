import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import {Link} from "react-router-dom";
  

export class NavBar extends Component {
    // boxShadow: "0 0 10px 0 rgba(0 ,0,0 ,0.2), 0, 0, 30px, 0 rgba(0,0,0,0.19)"

    render() {
        return (
            <div style={{boxShadow: "0px 4px 4px rgba(0,0,0,0.25),0px 1px 2px rgba(0,0,0,0.3)"}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link style={{color:"#FFC000"}} className="navbar-brand" to="/">NewsNinja</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link " aria-current="page" to="/technology">Technology</Link></li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

export default NavBar

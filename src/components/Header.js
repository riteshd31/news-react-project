import React, { Component } from 'react'
import download from './download.jpg'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <img src={download} alt="Logo" width="110" height="126" style={{marginLeft:"20px"}}/>
      {/* <img src="newslogo.png" alt="Cinque Terre" width="304" height="236"/>  */}
        {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{marginLeft:"14rem"}} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/business" >Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/entertainment" >Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/general">General</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" style={{color:"red"}} aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
              {/* <li className="nav-item">
                <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true" style={{color:"red"}}>Disabled</Link>
              </li> */}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
            <button className="btn btn-outline-success" type="submit" style={{color:"red"}}>Search</button>
          </form>
        </div>
      </div>
    </nav>
    )
  }
}

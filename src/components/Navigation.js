import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props){
  return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.link1}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-link" aria-current="page" to='/about'>About</Link>
          </li>
          <li className="nav-item mx-5">
            <div className={`nav-link form-check form-switch text-${props.mode==='light'?'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </li>
        </ul>
        <form className="d-flex" role="search">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button> */}
          <div className='showTextDetails'>
            <input className='showInfo' type="text" readOnly />
            <input className='showInfo' type="text" value="" readOnly />
          </div>
        </form>
      </div>
    </div>
    </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, link1: PropTypes.string} 

Navbar.defaultProps = { 
  title: 'Set title here',
  link1: 'About text here'
};

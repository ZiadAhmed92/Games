import React from 'react'
import './Header.css'
import profileHeader from '../../assets/Images/profile-header.jpg'
import logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark py-2 ">
  <div className="container">
    <Link to='Home'> <img src={logo} className='p-1'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="Browse">Browse</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="Details">Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="Streams">Streams</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link btn-nav  rounded-5" aria-current="page" to="Profile">Profile <img src={profileHeader}className='rounded-circle w-25'/> </Link>
        </li>
      

      
      
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

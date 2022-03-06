import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Navbar() {
  return (
    // <nav  style={{backgroundColor:"black"}}>
  <div className="container-fluid d-flex justify-content-around " style={{backgroundColor:"black"}} >
    <Link className='style' style={{fontSize:"3.5em",textDecoration:"none",fontWeight:"900"}} to={'/movielist'}>MovieList</Link>
    <Link className='style' style={{fontSize:"3.5em",textDecoration:"none",fontWeight:"900"}} to={'/favorates'}>Favourites</Link>
  </div>
// </nav>
  )
}

export default Navbar
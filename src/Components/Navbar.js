import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <Link className="navbar-brand text-white" to={'/movielist'}>MovieList</Link>
    <Link className="navbar-brand text-white" to={'/favorates'}>Favorates</Link>
  </div>
</nav>
  )
}

export default Navbar
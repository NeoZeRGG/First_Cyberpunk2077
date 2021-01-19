import React from "react"
import { Link } from "react-router-dom"

function Header () {
  return (
    <header >
      <div className="header-content">
          <Link to="/People">People</Link>
          <Link to="/Planets">Planet</Link>
          <Link to="/Starships">Starship</Link>
      </div>
    </header>
  )
}

export default Header
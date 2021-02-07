import React from "react"
import { Link } from "react-router-dom"

function Header () {
  return (
    <header>
      <div className="header-content">
        <div className="header-link"><Link to="/People">People</Link></div>
        <div className="header-link"><Link to="/Planets">Planets</Link></div>
        <div className="header-link"> <Link to="/Starships">Starships</Link></div>
      </div>
    </header>
  )
}

export default Header
import React from "react"

function Planets (props) {
  return (
    props.data2.map(planet => {
      return (
    <div>
      <span className="tab1">
          <p>Name: {planet.name}</p>
          <p>Rotation period: {planet.rotation_period}</p>
          <p>Orbital period: {planet.orbital_period}</p>
          <p>Population: {planet.population}</p>
      </span>
    </div>
        )
      }
    )
  )
}

export default Planets
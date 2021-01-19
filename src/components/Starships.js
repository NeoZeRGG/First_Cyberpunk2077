import React from "react"

function Starships (props) {
  return (
    props.data3.map(starship => {
      return (
    <div>
      <span className="tab1">
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Cost in credits: {starship.cost_in_credits}</p>
          <p>Starship class: {starship.starship_class}</p>
      </span>
    </div>
       )
      }
    )
  )
}

export default Starships
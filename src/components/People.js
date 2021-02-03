import React from "react"
import {Link} from 'react-router-dom'


function People (props) {
  return (
    props.data1.map((person, index) => {
      return (
      <div>
        <span key={index} className="tab1">
          <Link to={"/People/"+ (index+1)}> Name: {person.name}</Link>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Gender: {person.gender}</p>
        </span>
    </div>
        )
      }
    )
  )
}



export default People
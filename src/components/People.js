import React from "react"
import {Link, useParams} from 'react-router-dom'

 export function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

function People (props) {
  return (
    props.data1.map(person => {
      return (
      <div>
        <span className="tab1">
          <Link to='/'>Name: {person.name}</Link>
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
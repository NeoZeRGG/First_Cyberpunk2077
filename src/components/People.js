import React, {Component} from "react"
import {Link} from 'react-router-dom'


class People extends Component {
  constructor(){
    super();
    this.state = {
        people: []
      }
    }
    componentDidMount() {

      fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then((data) => {
            this.setState({people: data.results})
        })
    }

  render() {
      return (
      this.state.people.map((person, index) => {
      return (
      <div className="plate">
          <Link to={"/People/"+ (index+1)}> Name: {person.name}</Link>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Gender: {person.gender}</p>
      </div>
        )
      }
    )
    )
  }
}

export default People;
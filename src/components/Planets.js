import React, {Component} from "react"

class Planets extends Component {
  constructor(){
    super();
    this.state = {
        planets: []
      }
    }

    componentDidMount() {
      fetch("https://swapi.dev/api/planets")
        .then(response => response.json())
        .then((data) => {
            this.setState({planets: data.results})
        })
    }

  render() {
    return (
    this.state.planets.map(planet => {
      return (
        <div className="plate">
              <p>Name: {planet.name}</p>
              <p>Rotation period: {planet.rotation_period}</p>
              <p>Orbital period: {planet.orbital_period}</p>
              <p>Population: {planet.population}</p>
        </div>
            )
          }
        )
      )
    }
}

export default Planets
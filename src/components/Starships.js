import React, {Component} from "react"


class Starships extends Component {
  constructor(){
    super();
    this.state = {
        starships: []
      }
    }

  componentDidMount() {
  fetch("https://swapi.dev/api/starships")
        .then(response => response.json())
        .then((data) => {
            this.setState({starships: data.results})
        })
  }

  render() {
  return (
    this.state.starships.map(starship => {
      return (
        <div className="plate">
              <p>Model: {starship.model}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <p>Cost in credits: {starship.cost_in_credits}</p>
              <p>Starship class: {starship.starship_class}</p>
        </div>
            )
          }
        )
      )
    }
}

export default Starships
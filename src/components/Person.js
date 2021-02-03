import React from "react";


class Person extends React.Component {
  constructor(){
    super();
  this.state = {
      person: []
  };
}

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(response => response.json())
    .then(data => {
        this.setState({person : data.results});
    });
  }

  
  render() {
    return (
        this.state.person.map((person, index) => {
          return (
          <div>
            <span key={index} className="tab1">
              <h2>Person detail information</h2>
              <p> Name: {person.name}</p>
              <p>Height: {person.height}</p>
              <p>Mass: {person.mass}</p>
              <p>Gender: {person.gender}</p>
              <p>Hair color: {person.hair_color}</p>
              <p>Skin color: {person.skin_color}</p>
              <p>Eye color: {person.eye_color}</p>
              <p>Birth year: {person.birth_year}</p>
            </span>
        </div>
            )
          }
        )
      )
  }
}




export default Person
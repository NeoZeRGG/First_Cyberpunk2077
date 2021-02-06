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
        this.setState({person : data});
    });
  }

  
  render() {
          return (
          <div>
            <span className="tab1">
              <h2>Person detail information</h2>
              <p> Name: {this.state.person.name}</p>
              <p>Height: {this.state.person.height}</p>
              <p>Mass: {this.state.person.mass}</p>
              <p>Gender: {this.state.person.gender}</p>
              <p>Hair color: {this.state.person.hair_color}</p>
              <p>Skin color: {this.state.person.skin_color}</p>
              <p>Eye color: {this.state.person.eye_color}</p>
              <p>Birth year: {this.state.person.birth_year}</p>
            </span>
        </div>
            )
          }  
  }

export default Person
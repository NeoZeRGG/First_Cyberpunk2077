import React, {Component} from 'react'
import Header from './components/Header'
import People from './components/People'
import Planets from './components/Planets';
import Starships from './components/Starships';
import Person from './components/Person'
import {BrowserRouter, Route, Switch} from "react-router-dom"


class App extends Component {
    constructor(){
        super();
        this.state = {
            people: [],
            planets: [],
            starships: []
    }
    
}

    componentDidMount(){
        this.setState

        fetch("https://swapi.dev/api/people")
        .then(response => response.json())
        .then((data1) => {
            this.setState({people: data1.results})
        })

        fetch("https://swapi.dev/api/planets")
        .then(response => response.json())
        .then((data2) => {
            this.setState({planets: data2.results})
        })

        fetch("https://swapi.dev/api/starships")
        .then(response => response.json())
        .then((data3) => {
            this.setState({starships: data3.results})
        })
    }

    

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/People"
                        render={() => <People data1={this.state.people} /> } />
                        <Route path="/Planets" 
                        render={() => <Planets data2={this.state.planets} />} />
                        <Route path="/Starships" 
                        render={() => <Starships data3={this.state.starships} />} />
                        <Route path="/People/:id" component={Person} />
                    </Switch> 
                </div>
            </BrowserRouter>
        );
    }
}



export default App;

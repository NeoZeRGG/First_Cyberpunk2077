import React, {Component} from 'react'
import Header from './components/Header'
import People from './components/People'
import Planets from './components/Planets';
import Starships from './components/Starships';
import Person from './components/Person'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Spinner from './components/spinner/spinner'


class App extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true
    }
}

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 5000)
    }

    
    render(){

        const { isLoading } = this.state

        if(isLoading) {
            return <Spinner />
        }

        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/People" render={() => <People /> } />
                        <Route path="/Planets" render={() => <Planets />} />
                        <Route path="/Starships" render={() => <Starships />} />
                        <Route path="/People/:id" component={Person} />
                    </Switch> 
                </div>
            </BrowserRouter>
        );
    }
}



export default App;

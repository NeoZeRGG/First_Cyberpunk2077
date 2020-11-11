import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";



const App = (props) => {
  return (
  <BrowserRouter>
  <div className='app-wrapper'>
      <Header />
      <Navbar />
    <div className='app-wrapper-content'>
        {/*<Route path="/dialogs" component={Dialogs}/>*/}
        {/*<Route path="/profile" component={Profile}/>*/}

        <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
        <Route path="/profile" render={ () => <Profile state={props.state.profilePage}/>}/>

        {/*<Route path="/news" render={ () => <News/>/>*/}
        {/*<Route path="/music" render={ () => <Music/>/>*/}
        {/*<Route path="/settings" render={ () => <Settings/>/>*/}
      </div>
      </div>
  </BrowserRouter>);
}


export default App;

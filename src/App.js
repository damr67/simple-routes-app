import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Error from './components/Error';
import Users from './components/Users/Users';
import User from './components/User/User';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users} exact/>
          <Route path="/users/:id" component={User} exact/>
          <Route  component={Error}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

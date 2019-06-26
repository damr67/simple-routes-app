import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route  component={Error}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

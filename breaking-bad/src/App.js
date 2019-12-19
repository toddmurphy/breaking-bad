import React from 'react';
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/CharacterList' component={CharacterList} />
      {/* <Route exact path='/Character/:id' component={Character} /> */}
      <Route exact path='/Character/:id' render={props => <Character {...props} />} />
    </div>
  );
}

export default App;

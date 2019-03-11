import React, { Component } from 'react';
import './App.css';
import CharactersList1 from './components/CharactersList1';
import CharactersList2 from './components/CharactersList2';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  // constructor() {
  //   super();
    // this.state = {
    //   starwarsChars: [],
    // };
  // }

  // componentDidMount() {
  //   this.getCharacters('https://swapi.co/api/people/');
  // }

  // getCharacters = URL => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       this.setState({ starwarsChars: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="Header">React Wars</h1>
          <nav>
            <a href="/">Characters 1</a>
            <a href="/second">Characters 2</a>
          </nav>
          <Route exact path='/' component={CharactersList1} />
          <Route path='/second' component={CharactersList2} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

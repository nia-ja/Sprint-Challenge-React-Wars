import React, { Component } from 'react';
import './App.css';
import CharactersList1 from './components/CharactersList1';
import CharactersList2 from './components/CharactersList2';
import { BrowserRouter, Route } from 'react-router-dom';
import {TweenMax} from 'gsap';


class App extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    this.myElement2 = null;
    // reference to the animation
    this.myTween = null;
    this.myTween2 = null;
  }

  componentDidMount(){
      // use the node ref to create the animation
      this.myTween = TweenMax.from(this.myElement, 2, {x:-1000});
      this.myTween2 = TweenMax.from(this.myElement2, 2, {opacity:0, y:-100});
  }
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
          <h1 ref={h1 => this.myElement2 = h1}className="Header">React Wars</h1>
          <nav ref={nav => this.myElement = nav}>
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

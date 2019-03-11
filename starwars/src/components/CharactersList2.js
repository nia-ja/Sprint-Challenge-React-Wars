import React, { Component } from "react";
import './StarWars.css';
import Character from './Character';

export default class CharactersList extends Component {
    constructor() {
        super();
        this.state = {
            starwarsChars: [],
        };
    }
    componentDidMount() {
        this.getCharacters('https://swapi.co/api/people/?page=2');
    }
    getCharacters = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            this.setState({ starwarsChars: data.results });
          })
          .catch(err => {
            throw new Error(err);
          });
    };
    render() {
        return (
            <div className="characters-list">   
              {this.state.starwarsChars.map((char, index) => (<Character char={char} key={index} className="black" />))}
            </div>
        )
    }
}
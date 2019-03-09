import React from "react";
import './StarWars.css';
import Character from './Character';

export default function CharactersList(props) {
    return (
        <div className="characters-list">   
          {props.list.starwarsChars.map((char, index) => (<Character char={char} key={index} />))}
        </div>
    )
}
import React from "react";
import './StarWars.css'

// creates separate card for each character object
export default function Character(props) {
    return (
        <div className={`character ${props.className}`}>
            <h3>{props.char.name}</h3>
            <p>
                <span className='bold-text'>Birth year:</span> {props.char.birth_year}
            </p>
            <p>
                <span className='bold-text'>Skin color:</span> {props.char.skin_color}
            </p>
            <p>
                <span className='bold-text'>Hair color:</span> {props.char.hair_color}
            </p>
            <p>
                <span className='bold-text'>Eye color:</span> {props.char.eye_color}
            </p>
            <p>
                <span className='bold-text'>Height:</span> {props.char.height}
            </p>
            <p>
                <span className='bold-text'>Weight:</span> {props.char.mass}
            </p>
        </div>
    );
}
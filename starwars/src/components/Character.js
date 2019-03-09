import React from "react";
import './StarWars.css'

export default function Character(props) {

    return (
        <div className="character">
            <h3>{props.char.name}</h3>
            <p>
                <strong>Birth year:</strong> {props.char.birth_year}
            </p>
            <p>
                <strong>Skin color:</strong> {props.char.skin_color}
            </p>
            <p>
                <strong>Hair color:</strong> {props.char.hair_color}
            </p>
            <p>
                <strong>Eye color:</strong> {props.char.eye_color}
            </p>
            <p>
                <strong>Height:</strong> {props.char.height}
            </p>
            <p>
                <strong>Weight:</strong> {props.char.mass}
            </p>
        </div>
    );
}


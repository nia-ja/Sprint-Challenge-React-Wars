import React from "react";

export default function Character(props) {
    return (
        <div className="character">
            <h3>{props.char.name}</h3>
            <p>Birth year: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Hair color: {props.char.hair_color}</p>
        </div>
    );
}


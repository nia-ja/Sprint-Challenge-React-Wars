import React from "react";
import './StarWars.css';
import {TweenMax} from 'gsap';

// creates separate card for each character object
export default class Character extends React.Component {
    constructor(props){
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }
    
    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenMax.from(this.myElement, 1.5, {opacity:0, y:500});
    }
    render() {
        return (
            <div ref={div => this.myElement = div} className={`character ${this.props.className}`}>
                <h3>{this.props.char.name}</h3>
                <p>
                    <span className='bold-text'>Birth year:</span> {this.props.char.birth_year}
                </p>
                <p>
                    <span className='bold-text'>Skin color:</span> {this.props.char.skin_color}
                </p>
                <p>
                    <span className='bold-text'>Hair color:</span> {this.props.char.hair_color}
                </p>
                <p>
                    <span className='bold-text'>Eye color:</span> {this.props.char.eye_color}
                </p>
                <p>
                    <span className='bold-text'>Height:</span> {this.props.char.height}
                </p>
                <p>
                    <span className='bold-text'>Weight:</span> {this.props.char.mass}
                </p>
            </div>
        );
    }
}
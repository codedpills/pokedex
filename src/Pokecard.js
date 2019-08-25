import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;
        let imgSrc = `${POKE_API}${id}.png`
        return (
            <div className="pokecard">
                <h1 className="pokecard-title">{name}</h1>
                <img src={imgSrc} alt={name} />
                <div className="pokecard-data">
                    Type: {type}
                </div>
                <div className="pokecard-data">
                    EXP: {exp}
                </div>
            </div>
        );
    }
}

export default Pokecard;

import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => number <= 999 ? `00${number}`.slice(-3) : number;

export class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;
        const newId = padToThree(id);
        let imgSrc = `${POKE_API}${newId}.png`
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

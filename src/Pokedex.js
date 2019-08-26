import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

export class Pokedex extends Component {
    render() {
        const {pokemons} = this.props;
        const pokemon = pokemons.map(p => {
            return (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} key={p.id}/>
            )
        })
        let title;
        if (this.props.isWinner) {
            title = <h1 className="pokedex-winner">WINNING HAND!</h1>
        } else {
            title = <h1 className="pokedex-loser">LOSING HAND!</h1>
        }
        return (
            <div className="pokedex">
                {title}
                <h4>Total experience: {this.props.exp}</h4>
                <div className="pokedex-card">
                    { pokemon }
                </div>
            </div>
        );
    }
}

export default Pokedex;

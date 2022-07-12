import React, { Component } from "react";
import './Pokecard.css';

let Poke_img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padtothree = (number) => (number <=999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component{
    render() {
        let imgsrc = `${Poke_img}${padtothree(this.props.id)}.png`;
            return(
                <div className='Pokecard'>
                    <h1 className='Pokecard-title'>{this.props.name}</h1>
                    <div className='Pokecard-image'>
                    <img src={imgsrc} alt={this.props.name} />
                    </div>
                    <div className='Pokecard-data'>Type: {this.props.type}</div>
                    <div className='Pokecard-data'>Exp: {this.props.exp}</div>

                </div>
            )
            
    }
}

export default Pokecard;
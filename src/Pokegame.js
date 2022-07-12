import React, {Component} from 'react';
import Pokedex from './Pokedex';


class Pokegame extends Component{

    static defaultProps = {
        Pokemon: [
           {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
           {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
           {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
           {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
           {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
           {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
           {id: 94, name:  'Gengar', type: 'poison', base_experience: 225},
           {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
   };

    render(){
        
        let hand1 = [];
        let hand2 = [ ...this.props.Pokemon ];

            while(hand1.length < hand2.length){
                 let randomindex = Math.floor(Math.random()*hand2.length);
                 let randompokemon = hand2.splice(randomindex, 1)[0];
                 hand1.push(randompokemon);
                 
            }
                 let exp1 =0;
                for(let i=0;i<hand1.length;i++){
                    exp1=exp1+hand1[i].base_experience;
                }

                let exp2 =0;
                for(let i=0;i<hand2.length;i++){
                    exp2=exp2+hand2[i].base_experience;
                }

                
            
        return(
            
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1<exp2}/>
                
            </div>
        )
    }
}


export default Pokegame;
import { Spell } from './spell';


export interface Wizard {

    id:number;
    name:string;
    house:string;
    image:string;
    price:number;
    attack:number;
    defense:number;
    spells: Array<Spell>
}
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BddService } from 'src/app/services/bdd.service';
import { Spell } from 'src/app/interfaces/spell';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-shop-spell',
  templateUrl: './shop-spell.component.html',
  styleUrls: ['./shop-spell.component.css']
})
export class ShopSpellComponent implements OnInit {

  @Input() profile:Profile;

  constructor(private bdd:BddService) {
    this.bdd.getSpells();
   }

  get spells():Array<Spell>{
    return this.bdd.tabSpells;
  }

  hasSpell(spell:Spell):boolean{
    return this.profile.spells.includes(spell.id);
  }

  buyOrSellSpell(spell:Spell){
    let hasSpell = this.profile.spells.includes(spell.id);
    if(!hasSpell){
      this.profile.money -= spell.price;
    }
    else {
      this.profile.money += spell.price;
    }

    hasSpell ? this.profile.spells.splice(this.profile.spells.indexOf(spell.id), 1) : this.profile.spells.push(spell.id);

    this.bdd.updateProfile(this.profile);
  }

  ngOnInit() {
  }

}

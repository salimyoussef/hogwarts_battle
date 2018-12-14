import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/interfaces/spell';
import { BddService } from 'src/app/services/bdd.service';

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.css']
})
export class SpellFormComponent implements OnInit {

  spell:any = {
    name: null,
    damage: null,
    price: null
  };

  constructor(private bdd: BddService) {}

  onSubmit(a){
    // this.bdd.createSpell(this.spell);
    console.log(a)
  }

  ngOnInit() {
  }

}

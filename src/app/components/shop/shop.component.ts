import { Component, OnInit } from '@angular/core';
import { Wizard } from '../../interfaces/wizard';
import { BddService } from 'src/app/services/bdd.service';
import { Spell } from 'src/app/interfaces/spell';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  houseStyles:Map<string,object> = new Map([
    ['Gryffindor', {'background-color': '#e74c3c'}],
    ['Slytherin', {'background-color': '#2ecc71'}],
    ['Hufflepuff', {'background-color': '#fff68f'}],
    ['Ravenclaw', {'background-color': '#52b3d9'}],
  ]);

  constructor(private bdd:BddService) {
  }

  currentWizard:any|null = null;

  get tabWizards():Array<Wizard>{
    return this.bdd.tabWizards;
  }

  get tabSpells():Array<Spell>{
    return this.bdd.tabSpells;
  }

  get members():Array<Wizard>{
    let members = [];
    if(this.profile){
      for(let member of this.profile.team){
        let realMember = this.tabWizards.find((wizard) => { return wizard.id === member.id; });
        members.push(realMember);
      }      
    }

    return members;
  }

  get profile():any{
    return this.bdd.profile;
  }

  buyOrSell(wizard:Wizard):void{
    let hasWizard = this.profile.team.includes(wizard.id);
    if(!hasWizard){
      this.profile.money -= wizard.price;
    }
    else {
      this.profile.money += wizard.price;
    }
    hasWizard ? this.profile.team.splice(this.profile.team.indexOf(wizard.id), 1) : this.profile.team.push(wizard.id);

    this.bdd.updateProfile(this.profile);
  }

  toHave():boolean{
    if(this.currentWizard && this.profile){
      return this.profile.team.includes(this.currentWizard.id);
    }
    else{
      return false;
    }
  }

  displayWizard(wizard: Wizard):void{
    //On récupère les sortilèges
    let member = this.profile.team.find((member) => { return member.id === wizard.id;});
    if(member){
      wizard.spells = [];
      for(let memberSpell of member.spells){
        let realSpell = this.bdd.tabSpells.find((spell) => { return memberSpell === spell.id;});
        wizard.spells.push(realSpell);
      }
    }
    this.currentWizard = wizard;
  }

  ngOnInit() {
  }

}

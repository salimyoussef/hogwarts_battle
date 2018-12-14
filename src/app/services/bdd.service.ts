import { Injectable } from '@angular/core';
import { Wizard } from '../interfaces/wizard';
import { HttpClient } from '@angular/common/http';

import { WizardIdPipe } from '../pipes/wizard-id.pipe';
import { Spell } from '../interfaces/spell';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class BddService {

  private _tabWizards:Array<Wizard> = [];
  private _tabSpells:Array<Spell> = [];
  private _profile:Profile|null = null;

  constructor(private http:HttpClient) {
    this.getProfile();
    this.getWizards();
   }

  get tabWizards():Array<Wizard>{
    return this._tabWizards;
  }

  get tabSpells():Array<Spell>{
    return this._tabSpells;
  }

  get profile():Profile|null{
    return this._profile;
  }

  getWizards():void{
    let url:string = "http://localhost:3000/wizards";
    this.http.get(url).subscribe(
      (res:Array<Wizard>)=>{
        this._tabWizards = res;
      }
    );
  }

  getSpells():void{
    let url:string = "http://localhost:3000/spells";
    this.http.get(url).subscribe(
      (res:Array<Spell>)=>{
        let id = 0;
        this._tabSpells = res;
      }
    );
  }

  getProfile():void{
    let url:string = "http://localhost:3000/profile";
    this.http.get(url).subscribe(
      (res)=>{
        this._profile = <Profile>res;
      });
  }

  updateProfile(profile:any):void{
    let url:string = "http://localhost:3000/profile";
    this.http.put(url, profile).subscribe(
      (res)=>{
        this._profile = <Profile>res;
      }
    );
  }

  createSpell(spell:any):void{
    let url:string = "http://localhost:3000/spells";
    this.http.post(url, spell).subscribe(
      (res)=>{

      }
    );
  }

}

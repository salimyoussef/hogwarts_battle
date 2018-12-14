import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Spell } from 'src/app/interfaces/spell';
import { BddService } from 'src/app/services/bdd.service';
import { Wizard } from 'src/app/interfaces/wizard';

@Component({
  selector: 'app-add-spell-dialog',
  templateUrl: './add-spell-dialog.component.html',
  styleUrls: ['./add-spell-dialog.component.css']
})
export class AddSpellDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddSpellDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Wizard,
    private bdd: BddService) {
      this.bdd.getSpells();
    }

  ngOnInit() {
  }

  get spells():Array<Spell>{
    return this.bdd.tabSpells;
  }

  hasSpell(spell:Spell):boolean{
    return this.data.spells.some((x) => x.id === spell.id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

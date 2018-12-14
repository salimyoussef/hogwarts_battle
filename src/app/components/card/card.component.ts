import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wizard } from '../../interfaces/wizard';
import { AddSpellDialogComponent } from '../add-spell-dialog/add-spell-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() wizard:Wizard;
  @Input() have:boolean;
  @Input() canBuy:boolean;
  @Output() select: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) { }

  addSpell(){
    let dialogRef = this.dialog.open(AddSpellDialogComponent, {
      data: this.wizard,
      height: '400px',
      width: '600px',
    });
  }

  action(){
    this.select.emit();
  }

  ngOnInit() {
  }

}

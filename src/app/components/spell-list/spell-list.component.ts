import { Component, OnInit, Input } from '@angular/core';
import { Spell } from 'src/app/interfaces/spell';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  @Input() spells:Array<Spell>;

  constructor() { }

  ngOnInit() {
  }

}

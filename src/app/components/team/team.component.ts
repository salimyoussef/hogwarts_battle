import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wizard } from '../../interfaces/wizard';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  @Input() members:Array<Wizard>|null = null;
  @Output() onClickWizard: EventEmitter<Wizard> = new EventEmitter<Wizard>();

  constructor() {
  }

  action(wizard:Wizard){
    this.onClickWizard.emit(wizard);
  }

  ngOnInit() {
  }

}

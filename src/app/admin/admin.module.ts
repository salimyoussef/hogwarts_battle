import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsComponent } from './components/spells/spells.component';
import { WizardsComponent } from './components/wizards/wizards.component';

@NgModule({
  declarations: [SpellsComponent, WizardsComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

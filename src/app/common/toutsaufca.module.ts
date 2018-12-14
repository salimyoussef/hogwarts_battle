import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellListComponent } from './spell-list/spell-list.component';
import { TestPipe } from '../test.pipe';

@NgModule({
  declarations: [SpellListComponent, TestPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SpellListComponent, TestPipe
  ]
})
export class ToutSaufCaModule { 
  constructor(){
    console.log("common module ? seriously?");
    console.log(this);
    
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsComponent } from './components/spells/spells.component';
import { WizardsComponent } from './components/wizards/wizards.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ToutSaufCaModule } from '../common/toutsaufca.module';

@NgModule({
  declarations: [SpellsComponent, WizardsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ToutSaufCaModule
  ]
})
export class AdminModule { }

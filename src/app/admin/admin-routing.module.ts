import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellsComponent } from './components/spells/spells.component';
import { WizardsComponent } from './components/wizards/wizards.component';

const routes: Routes = [
  {path: 'spells', component: SpellsComponent},
  {path: 'wizards', component: WizardsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

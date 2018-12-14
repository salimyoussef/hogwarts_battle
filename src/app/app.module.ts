import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBar, MatDialogModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BattleComponent } from './components/battle/battle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WizardIdPipe } from './pipes/wizard-id.pipe';
import { CardComponent } from './components/card/card.component';
import { TeamComponent } from './components/team/team.component';
import { ShopSpellComponent } from './components/shop-spell/shop-spell.component';
import { RepeatDirective } from './directives/repeat.directive';
import { FormsModule } from '@angular/forms';
import { AddSpellDialogComponent } from './components/add-spell-dialog/add-spell-dialog.component';
import { SpellFormComponent } from './components/spell-form/spell-form.component';
import { SpellListComponent } from './components/spell-list/spell-list.component';
import { WizardListComponent } from './components/wizard-list/wizard-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    BattleComponent,
    NavbarComponent,
    WizardIdPipe,
    CardComponent,
    TeamComponent,
    MatProgressBar,
    ShopSpellComponent,
    RepeatDirective,
    AddSpellDialogComponent,
    SpellFormComponent,
    SpellListComponent,
    WizardListComponent
  ],
  entryComponents: [AddSpellDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

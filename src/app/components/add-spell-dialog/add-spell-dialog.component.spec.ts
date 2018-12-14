import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpellDialogComponent } from './add-spell-dialog.component';

describe('AddSpellDialogComponent', () => {
  let component: AddSpellDialogComponent;
  let fixture: ComponentFixture<AddSpellDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpellDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpellDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

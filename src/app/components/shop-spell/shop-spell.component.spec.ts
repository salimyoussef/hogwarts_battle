import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSpellComponent } from './shop-spell.component';

describe('ShopSpellComponent', () => {
  let component: ShopSpellComponent;
  let fixture: ComponentFixture<ShopSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

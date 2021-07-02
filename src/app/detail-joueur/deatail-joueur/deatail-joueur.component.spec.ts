import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailJoueurComponent } from './deatail-joueur.component';

describe('DeatailJoueurComponent', () => {
  let component: DeatailJoueurComponent;
  let fixture: ComponentFixture<DeatailJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatailJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

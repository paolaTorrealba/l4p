import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAMateriaComponent } from './inscripcion-amateria.component';

describe('InscripcionAMateriaComponent', () => {
  let component: InscripcionAMateriaComponent;
  let fixture: ComponentFixture<InscripcionAMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionAMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionAMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

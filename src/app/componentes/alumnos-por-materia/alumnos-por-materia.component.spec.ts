import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosPorMateriaComponent } from './alumnos-por-materia.component';

describe('AlumnosPorMateriaComponent', () => {
  let component: AlumnosPorMateriaComponent;
  let fixture: ComponentFixture<AlumnosPorMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosPorMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosPorMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

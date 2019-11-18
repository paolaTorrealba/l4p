import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasACargoComponent } from './materias-acargo.component';

describe('MateriasACargoComponent', () => {
  let component: MateriasACargoComponent;
  let fixture: ComponentFixture<MateriasACargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasACargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasACargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

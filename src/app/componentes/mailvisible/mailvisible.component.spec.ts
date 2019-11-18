import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailvisibleComponent } from './mailvisible.component';

describe('MailvisibleComponent', () => {
  let component: MailvisibleComponent;
  let fixture: ComponentFixture<MailvisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailvisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailvisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

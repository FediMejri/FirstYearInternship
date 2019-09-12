import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoachComponent } from './register-coach.component';

describe('RegisterCoachComponent', () => {
  let component: RegisterCoachComponent;
  let fixture: ComponentFixture<RegisterCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

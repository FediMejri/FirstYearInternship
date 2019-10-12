import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachsComponent } from './coachs.component';

describe('CoachsComponent', () => {
  let component: CoachsComponent;
  let fixture: ComponentFixture<CoachsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

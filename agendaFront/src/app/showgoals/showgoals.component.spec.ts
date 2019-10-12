import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgoalsComponent } from './showgoals.component';

describe('ShowgoalsComponent', () => {
  let component: ShowgoalsComponent;
  let fixture: ComponentFixture<ShowgoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

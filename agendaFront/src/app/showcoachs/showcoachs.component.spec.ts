import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcoachsComponent } from './showcoachs.component';

describe('ShowcoachsComponent', () => {
  let component: ShowcoachsComponent;
  let fixture: ComponentFixture<ShowcoachsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcoachsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

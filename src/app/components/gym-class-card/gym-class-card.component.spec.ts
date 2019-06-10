import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymClassCardComponent } from './gym-class-card.component';

describe('GymClassCardComponent', () => {
  let component: GymClassCardComponent;
  let fixture: ComponentFixture<GymClassCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymClassCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

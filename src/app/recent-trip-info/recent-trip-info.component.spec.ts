import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTripInfoComponent } from './recent-trip-info.component';

describe('RecentTripInfoComponent', () => {
  let component: RecentTripInfoComponent;
  let fixture: ComponentFixture<RecentTripInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentTripInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTripInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

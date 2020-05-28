import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HederInfoComponent } from './heder-info.component';

describe('HederInfoComponent', () => {
  let component: HederInfoComponent;
  let fixture: ComponentFixture<HederInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HederInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HederInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

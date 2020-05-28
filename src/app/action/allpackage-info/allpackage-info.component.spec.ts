import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpackageInfoComponent } from './allpackage-info.component';

describe('AllpackageInfoComponent', () => {
  let component: AllpackageInfoComponent;
  let fixture: ComponentFixture<AllpackageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpackageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpackageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

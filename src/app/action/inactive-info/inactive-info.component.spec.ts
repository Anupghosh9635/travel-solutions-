import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveInfoComponent } from './inactive-info.component';

describe('InactiveInfoComponent', () => {
  let component: InactiveInfoComponent;
  let fixture: ComponentFixture<InactiveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

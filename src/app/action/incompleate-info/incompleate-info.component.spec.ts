import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleateInfoComponent } from './incompleate-info.component';

describe('IncompleateInfoComponent', () => {
  let component: IncompleateInfoComponent;
  let fixture: ComponentFixture<IncompleateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompleateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

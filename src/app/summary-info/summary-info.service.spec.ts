import { TestBed } from '@angular/core/testing';

import { SummaryInfoService } from './summary-info.service';

describe('SummaryInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummaryInfoService = TestBed.get(SummaryInfoService);
    expect(service).toBeTruthy();
  });
});

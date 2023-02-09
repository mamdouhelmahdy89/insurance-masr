import { TestBed } from '@angular/core/testing';

import { DatainsuranceService } from './datainsurance.service';

describe('DatainsuranceService', () => {
  let service: DatainsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatainsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

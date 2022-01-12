import { TestBed } from '@angular/core/testing';

import { VetUnitInfoService } from './vet-unit-info.service';

describe('VetUnitInfoService', () => {
  let service: VetUnitInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetUnitInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PackagePlanTabService } from './package-plan-tab.service';

describe('PackagePlanTabService', () => {
  let service: PackagePlanTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagePlanTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

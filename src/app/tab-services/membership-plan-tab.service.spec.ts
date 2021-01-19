import { TestBed } from '@angular/core/testing';

import { MembershipPlanTabService } from './membership-plan-tab.service';

describe('MembershipPlanTabService', () => {
  let service: MembershipPlanTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipPlanTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

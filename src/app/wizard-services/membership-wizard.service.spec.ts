import { TestBed } from '@angular/core/testing';

import { MembershipWizardService } from './membership-wizard.service';

describe('MembershipWizardService', () => {
  let service: MembershipWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

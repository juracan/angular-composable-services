import { TestBed } from '@angular/core/testing';

import { PackageWizardService } from './package-wizard.service';

describe('PackageWizardService', () => {
  let service: PackageWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

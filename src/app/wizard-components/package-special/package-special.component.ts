import { Component, OnInit } from '@angular/core';
import { ClientTabService } from '../../tab-services/client-tab.service';
import { PackagePlanTabService } from '../../tab-services/package-plan-tab.service';
import { PackageWizardService } from '../../wizard-services/package-wizard.service';

@Component({
  selector: 'app-package-special',
  templateUrl: './package-special.component.html',
  styleUrls: ['./package-special.component.scss'],
  providers: [
    { provide: ClientTabService, useExisting: PackageWizardService },
    { provide: PackagePlanTabService, useExisting: PackageWizardService },
  ],
})
export class PackageSpecialComponent implements OnInit {

  constructor(private packageWizardService: PackageWizardService) { }

  ngOnInit(): void {
  }

}

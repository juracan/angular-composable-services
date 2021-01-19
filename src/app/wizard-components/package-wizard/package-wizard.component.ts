import { Component, OnInit } from '@angular/core';
import { ClientTabService } from 'src/app/tab-services/client-tab.service';
import { PackagePlanTabService } from 'src/app/tab-services/package-plan-tab.service';
import { PackageWizardService } from 'src/app/wizard-services/package-wizard.service';

@Component({
  selector: 'app-package-wizard',
  templateUrl: './package-wizard.component.html',
  styleUrls: ['./package-wizard.component.scss'],
  providers: [
    { provide: ClientTabService, useExisting: PackageWizardService },
    { provide: PackagePlanTabService, useExisting: PackageWizardService },
  ],
})
export class PackageWizardComponent implements OnInit {

  constructor(private packageWizardService: PackageWizardService) { }

  ngOnInit(): void {
  }

}

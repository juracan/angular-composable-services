import { Injectable } from '@angular/core';
import { ClientTabService } from '../tab-services/client-tab.service';
import { PackagePlanTabService } from '../tab-services/package-plan-tab.service';

@Injectable({
  providedIn: 'any'
})
export class PackageWizardService implements ClientTabService, PackagePlanTabService {
  constructor() {}

  getPackagePlan(packagePlanId: number): string {
    return (
      'Package Plan: (' + packagePlanId + ') Great Package PLAN'
    );
  }

  getClient(clientId: number): string {
    return 'Client: (' + clientId + ') Chris Crabtree';
  }
}

import { Injectable } from '@angular/core';
import { ClientTabService } from '../tab-services/client-tab.service';
import { MembershipPlanTabService } from '../tab-services/membership-plan-tab.service';

@Injectable({
  providedIn: 'any',
})
export class MembershipWizardService
  implements ClientTabService, MembershipPlanTabService {
  constructor() {}

  getMembershipPlan(membershipPlanId: number): string {
    return (
      'Membership Plan: (' + membershipPlanId + ') AWESOME MEMBERSHIP PLAN'
    );
  }

  getClient(clientId: number): string {
    return 'Client: (' + clientId + ') John Jones';
  }
}

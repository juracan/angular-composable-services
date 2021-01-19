import { Component, OnInit } from '@angular/core';
import { ClientTabService } from '../../tab-services/client-tab.service';
import { MembershipPlanTabService } from '../../tab-services/membership-plan-tab.service';
import { MembershipWizardService } from '../../wizard-services/membership-wizard.service';

@Component({
  selector: 'app-membership-wizard',
  templateUrl: './membership-wizard.component.html',
  styleUrls: ['./membership-wizard.component.scss'],
  providers: [
    { provide: ClientTabService, useExisting: MembershipWizardService },
    { provide: MembershipPlanTabService, useExisting: MembershipWizardService },
  ],
})
export class MembershipWizardComponent implements OnInit {

  constructor(private membershipWizardService: MembershipWizardService) { }

  ngOnInit(): void {
  }

}

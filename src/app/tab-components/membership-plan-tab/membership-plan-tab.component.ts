import { Component, OnInit } from '@angular/core';
import { MembershipPlanTabService } from '../../tab-services/membership-plan-tab.service';

@Component({
  selector: 'app-membership-plan-tab',
  templateUrl: './membership-plan-tab.component.html',
  styleUrls: ['./membership-plan-tab.component.scss'],
})
export class MembershipPlanTabComponent implements OnInit {
  selectedMembership = '';

  constructor(private membershipTabService: MembershipPlanTabService) {}

  ngOnInit(): void {
    this.selectedMembership = this.membershipTabService.getMembershipPlan(
      Math.floor(Math.random() * 10)
    );
  }
}

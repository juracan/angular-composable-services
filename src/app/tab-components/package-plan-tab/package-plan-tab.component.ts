import { Component, OnInit } from '@angular/core';
import { PackagePlanTabService } from '../../tab-services/package-plan-tab.service';

@Component({
  selector: 'app-package-plan-tab',
  templateUrl: './package-plan-tab.component.html',
  styleUrls: ['./package-plan-tab.component.scss'],
})
export class PackagePlanTabComponent implements OnInit {
  selectedPackage = '';

  constructor(private packageTabService: PackagePlanTabService) {}

  ngOnInit(): void {
    this.selectedPackage = this.packageTabService.getPackagePlan(
      Math.floor(Math.random() * 10)
    );
  }
}
